const parser = new DOMParser();

type MapFunction = (
  item: Element,
  fragment: DocumentFragment,
  parser: DOMParser
) => any;

export default function fetchRSSFeed(
  element: HTMLElement | null,
  url: string,
  selector: string,
  mapFunction: MapFunction
) {
  if (element == null)
    return Promise.reject(new Error("Cannot find element on the page"));

  const feedContainer = document.createElement("div");
  feedContainer.classList.add("dynamic-list", "loading");
  element!.lastElementChild!.before(feedContainer);

  return fetch(url)
    .then((response) =>
      response.ok ? response.text() : Promise.reject(response)
    )
    .then(async (xmlString) => {
      const document = parser.parseFromString(xmlString, "application/xml");
      const fragment = document.createDocumentFragment();
      for (const item of document.querySelectorAll(selector)) {
        mapFunction(item, fragment, parser);
      }
      feedContainer.append(fragment);
      feedContainer.classList.remove("loading");
      return feedContainer;
    })
    .catch((cause) => {
      feedContainer.remove();
      return Promise.reject(new Error("Failed to load RSS feed", { cause }));
    });
}
