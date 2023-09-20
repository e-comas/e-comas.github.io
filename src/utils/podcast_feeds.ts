import { PodcastItem, fetchRSSFeed } from "./podcast_fetch.ts";
import autoScroll from "./auto-scroll.ts";
import { createDynamicList } from "./rss_feed.ts";

const hashtag = /#\w+\b/g;

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);
document.getElementById("podcast")?.classList.add("podcast");

const hashtags = new Set() as Set<string>;
const tagsCache = new WeakMap() as Map<HTMLElement, string[]>;
const cards = new Set() as Set<HTMLElement>;

const filterField = document.createElement("input");

function filter() {
  console.log(location.hash);
  for (const card of cards) {
    card.hidden =
      hashtags.has(location.hash) &&
      !tagsCache.get(card)!.includes(location.hash);
  }
  filterField.value = location.hash;
}

function generateFilterField() {
  const dataList = document.createElement("datalist");
  dataList.id = "tags-list";
  dataList.append(
    ...Array.from(hashtags, (tag) => {
      const option = document.createElement("option");
      option.value = tag;
      return option;
    })
  );
  filterField.type = "search";
  filterField.placeholder = "Filter by tag";
  filterField.setAttribute("aria-label", filterField.placeholder);
  filterField.setAttribute("list", dataList.id);
  const updateSearch = () => {
    location.hash = filterField.value;
  };
  filterField.addEventListener("change", updateSearch);
  filterField.addEventListener("search", updateSearch);
  document.querySelector("main>aside")!.append(
    dataList,
    filterField,
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
}).then((podcastContainer) => {
  generateFilterField();
  filter();
  return podcastContainer;
}, console.warn);

addEventListener("hashchange", filter);
