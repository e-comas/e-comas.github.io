interface PodcastItem {
  title: string;
  description: string;
  link: string;
}
function createCard(item: PodcastItem) {
  const box = document.createElement("article");

  const title = document.createElement("h4");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const playLink = document.createElement("a");
  playLink.href = item.link;
  playLink.textContent = "Play";

  box.append(title, description, playLink);
  return box;
}

const podcastWrapper = document.getElementById("podcast");

if (podcastWrapper != null) {
  const podcastContainer = document.createElement("div");
  podcastContainer.classList.add("dynamic-list", "loading");
  podcastWrapper!.lastElementChild!.before(podcastContainer);

  fetch("https://anchor.fm/s/4ce11bac/podcast/rss")
    .then((response) =>
      response.ok ? response.text() : Promise.reject(response.status)
    )
    .then(async (xmlString) => {
      const document = new DOMParser().parseFromString(
        xmlString,
        "application/xml"
      );
      const podcastCards = document.createDocumentFragment();
      for (const item of document.querySelectorAll("channel>item")) {
        // TODO
        podcastCards.append(
          createCard({
            title: item.querySelector("title")!.textContent!,
            description: item.querySelector("description")!.textContent!,
            link: item.querySelector("link")!.textContent!,
          })
        );
      }
      podcastContainer.append(podcastCards);
      podcastContainer.classList.remove("loading");
    })
    .catch((cause) => {
      console.log(new Error("Failed to load podcast feed", { cause }));
    });
}

export {};
