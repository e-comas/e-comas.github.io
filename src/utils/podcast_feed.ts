import { fetchRSSFeed } from "./podcast_fetch.ts";
import autoScroll from "./auto-scroll.ts";

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);
document.getElementById("podcast")?.classList.add("podcast");

fetchRSSFeed(dummy, (card, podcastCards) => podcastCards.append(card)).then(
  (podcastContainer) => autoScroll(podcastContainer, 4000),
  console.warn
);
