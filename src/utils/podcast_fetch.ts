import _fetchRSSFeed from "./rss_feed.ts";

export interface PodcastItem {
  title: string;
  description: string;
  link: string;
}
type MapFunction = (
  card: Element,
  fragment: DocumentFragment,
  item: PodcastItem
) => any;

export function createCard(item: PodcastItem, parser: DOMParser) {
  const box = document.createElement("article");

  const title = document.createElement("h4");
  title.textContent = item.title;

  const description = document.createElement("div");
  const desc = parser.parseFromString(item.description, "text/html");
  console.log(desc.body)
  description.innerHTML =
    desc.body.innerHTML ?? "";

  const playLink = document.createElement("a");
  playLink.href = item.link;
  playLink.target = "_blank";
  playLink.rel = "noopener";
  playLink.textContent = "Play";
  playLink.classList.add("cta");

  box.append(title, description, playLink);
  return box;
}

export const extractInfo = (item: Element) =>
  ({
    title: item.querySelector("title")!.textContent!,
    description: item.querySelector("description")!.textContent!,
    link: item.querySelector("link")!.textContent!,
  } as PodcastItem);

export const fetchRSSFeed = (element: HTMLElement, mapFunction: MapFunction) =>
  _fetchRSSFeed(
    element,
    "https://anchor.fm/s/4ce11bac/podcast/rss",
    "channel>item",
    (item, fragment, parser) => {
      const podcastItem = extractInfo(item);
      mapFunction(createCard(podcastItem, parser), fragment, podcastItem);
    }
  );
