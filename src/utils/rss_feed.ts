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
  if (element != null) {
    const podcastContainer = document.createElement("div");
    podcastContainer.classList.add("dynamic-list", "loading");
    element!.lastElementChild!.before(podcastContainer);

    fetch(url)
      .then((response) =>
        response.ok ? response.text() : Promise.reject(response)
      )
      .then(async (xmlString) => {
        const document = parser.parseFromString(xmlString, "application/xml");
        const fragment = document.createDocumentFragment();
        for (const item of document.querySelectorAll(selector)) {
          mapFunction(item, fragment, parser);
        }
        podcastContainer.append(fragment);
        podcastContainer.classList.remove("loading");
      })
      .catch((cause) => {
        console.warn(cause);
        console.error(new Error("Failed to load RSS feed", { cause }));
        podcastContainer.remove();
      });
  }
}
