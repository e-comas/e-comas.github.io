import { fetchRSSFeed } from "./podcast_fetch.js";
import autoScroll from "./auto-scroll.js";
import { createDynamicList } from "./rss_feed.js";

const hashtag = /#\w+\b/g;

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);

const hashtags: Record<string, HTMLElement> = Object.create(null);

fetchRSSFeed(dummy, (card, fragment, item) => {
  for (const [match] of item.description.matchAll(hashtag)) {
    if (!(match in hashtags)) {
      const section = document.createElement("section");
      section.classList.add("podcast");
      const title = document.createElement("h3");
      title.textContent = match;
      title.style.textTransform = "none";
      const { feedContainerWrapper, feedContainer } = createDynamicList();
      feedContainer.classList.add("dynamic-list");
      section.append(title, feedContainerWrapper);
      fragment.append(section);
      hashtags[match] = feedContainer;
    }
    hashtags[match].append(card.cloneNode(true));
  }
}).then((wrapper) => {
  for (const feedContainer of Object.values(hashtags)) {
    console.log(feedContainer, feedContainer.childElementCount);
    if (feedContainer.childElementCount === 1) {
      feedContainer.style.overflowX = "hidden";
    } else {
      autoScroll(feedContainer, 4000);
    }
  }
  wrapper.parentElement!.parentElement!.replaceWith(...wrapper.children);
}, console.warn);
