import fetchRSSFeed from "./rss_feed.js";
import autoScroll from "./auto-scroll.js";

interface PodcastItem {
  title: string;
  description: string;
  link: string;
}
function createCard(item: PodcastItem, parser: DOMParser) {
  const box = document.createElement("article");

  const title = document.createElement("h4");
  title.textContent = item.title;

  const description = document.createElement("p");
  const desc = parser.parseFromString(item.description, "text/html");
  description.textContent =
    desc.body.firstElementChild?.nextElementSibling?.textContent ?? "";

  const playLink = document.createElement("a");
  playLink.href = item.link;
  playLink.textContent = "Play";

  box.append(title, description, playLink);
  return box;
}

const dummy = document.createElement("span");
document.getElementById("podcast")!.lastElementChild?.before(dummy);

fetchRSSFeed(
  dummy,
  "https://anchor.fm/s/4ce11bac/podcast/rss",
  "channel>item",
  (item, podcastCards, parser) =>
    podcastCards.append(
      createCard(
        {
          title: item.querySelector("title")!.textContent!,
          description: item.querySelector("description")!.textContent!,
          link: item.querySelector("link")!.textContent!,
        },
        parser
      )
    )
).then((podcastContainer) => autoScroll(podcastContainer, 4000), console.warn);

export {};
