const parser = new DOMParser();

export type MapFunction = (
  item: Element,
  fragment: DocumentFragment,
  parser: DOMParser
) => any;

export function createDynamicList() {
  const feedContainerWrapper = document.createElement("div");
  const feedContainer = document.createElement("div");
  feedContainerWrapper.style.position = "relative";
  feedContainerWrapper.style.width = "100%";
  feedContainerWrapper.append(feedContainer);
  return { feedContainer, feedContainerWrapper };
}

export default function fetchRSSFeed(
  element: HTMLElement,
  url: string,
  selector: string,
  mapFunction: MapFunction
) {
  const { feedContainer, feedContainerWrapper } = createDynamicList();
  feedContainer.classList.add("dynamic-list", "loading");
  element.replaceWith(feedContainerWrapper);
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
      feedContainerWrapper.replaceWith(element);
      return Promise.reject(new Error("Failed to load RSS feed", { cause }));
    });
}
