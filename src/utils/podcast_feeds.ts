import { PodcastItem, fetchRSSFeed } from "./podcast_fetch.ts";

const hashtag = /#\w+\b/g;

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);

const hashtags = new Set() as Set<string>;
const tagsCache = new WeakMap() as Map<HTMLElement, string[]>;
const cards = new Set() as Set<HTMLElement>;

const filterField = document.createElement("input");

const style: HTMLStyleElement = document.createElement("style");

function filter() {
  const hasTag = hashtags.has(location.hash);
  for (const card of cards) {
    card.hidden = hasTag && !tagsCache.get(card)!.includes(location.hash);
  }
  if (hasTag) {
    filterField.value = location.hash;
    document.head.append(style);
    style.sheet!.insertRule(
      `a.tag:not(.cta)[href=${JSON.stringify(location.hash)}]{color:#65D7BE}`,
      0
    );
    style.sheet!.insertRule(
      `a.cta.tag[href=${JSON.stringify(
        location.hash
      )}]{background-color:#65D7BE}`,
      1
    );
  } else {
    filterField.value = "";
    style.remove();
  }
}

const dataList = document.createElement("datalist");
dataList.id = "tags-list";
filterField.type = "search";
filterField.placeholder = "Filter by tag";
filterField.setAttribute("aria-label", filterField.placeholder);
filterField.setAttribute("list", dataList.id);
const updateSearch = () => {
  location.hash = filterField.value;
};
filterField.addEventListener("change", updateSearch);
filterField.addEventListener("search", updateSearch);
document.querySelector("main>aside")!.append(dataList, filterField);

function populateFilterField() {
  dataList.append(
    ...Array.from(hashtags, (tag) => {
      const option = document.createElement("option");
      option.value = tag;
      return option;
    })
  );
  document.querySelector("main>aside")!.append(
    ...Array.from(
      new Set(Array.from(cards).flatMap((card) => tagsCache.get(card))),
      (tag) => {
        const link = document.createElement("a");
        link.textContent = tag!;
        link.href = tag!;
        link.className = "tag";
        return link;
      }
    )
  );
}

const loading = document.createElement("p");
loading.id = "loadingMessage";
loading.textContent = "Fetching content from RSS feed, please wait...";
document.getElementById("podcast")?.prepend(loading);

fetchRSSFeed(dummy, (card, fragment, item: PodcastItem) => {
  cards.add(card as HTMLElement);
  const itemTags = item.description.matchAll(hashtag);
  const itemTagsArray = Array.from(itemTags).map((matchArray) =>
    matchArray.join("")
  );
  tagsCache.set(card as HTMLElement, itemTagsArray);
  for (const match of itemTagsArray) {
    if (!hashtags.has(match)) {
      hashtags.add(match);
    }
  }
  fragment.append(card);
})
  .catch((e) => {
    loading.textContent = "Error: " + e.message;
    loading.classList.add("error");
    throw e;
  })
  .then((podcastContainer) => {
    populateFilterField();
    filter();
    document.getElementById("podcast")?.removeChild(loading);
    return podcastContainer;
  }, console.warn);

addEventListener("hashchange", filter);
