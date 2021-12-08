import { fetchRSSFeed } from "./podcast_fetch.js";
import autoScroll from "./auto-scroll.js";

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);

fetchRSSFeed(dummy, (card, podcastCards) => podcastCards.append(card)).then(
  (podcastContainer) => autoScroll(podcastContainer, 4000),
  console.warn
);
