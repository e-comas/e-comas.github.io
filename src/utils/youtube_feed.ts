import { clickHandler } from "./yt-embeder.js";

interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}
interface YouTubeVideo {
  title: string;
  videoId: string;
  thumbnail: YouTubeThumbnail;
}
function createCard(item: YouTubeVideo) {
  const box = document.createElement("article");
  box.className = "video-link background-wrapper";

  const playLink = document.createElement("a");
  playLink.href = `https://www.youtube.com/watch?v=${item.videoId}`;
  playLink.dataset.embed = `https://www.youtube.com/embed/${item.videoId}?autoplay=1&amp;playsinline=1`;
  playLink.target = "_blank";
  playLink.rel = "noopener";
  playLink.title = "Watch on YouTube";
  playLink.append("Play video on YouTube");
  playLink.addEventListener("click", clickHandler, { once: true });

  const thumbnail = document.createElement("img");
  thumbnail.src = item.thumbnail.url;
  thumbnail.alt = "Thumbnail";
  thumbnail.className = "background";
  thumbnail.width = item.thumbnail.width;
  thumbnail.height = item.thumbnail.height;

  box.append(thumbnail, playLink);
  return box;
}

const webinarsWrapper = document.getElementById("webinars");

if (webinarsWrapper != null) {
  const podcastContainer = document.createElement("div");
  podcastContainer.classList.add("dynamic-list", "loading");
  webinarsWrapper!.lastElementChild!.before(podcastContainer);

  fetch(
    // "https://www.youtube.com/feeds/videos.xml?playlist_id=",
    `https://e-comas-cors.herokuapp.com/${encodeURI(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UClCYdUcUs1zJk8O3a4lC9lw"
    )}`
  )
    .then((response) =>
      response.ok ? response.text() : Promise.reject(response)
    )
    .then(async (xmlString) => {
      const document = new DOMParser().parseFromString(
        xmlString,
        "application/xml"
      );
      const podcastCards = document.createDocumentFragment();
      for (const item of document.querySelectorAll("feed>entry")) {
        // url="https://i2.ytimg.com/vi/iJ4IdIUIE4w/hqdefault.jpg" width="480" height="360"
        const thumbnail = item
          .getElementsByTagNameNS("http://search.yahoo.com/mrss/", "group")
          .item(0)!
          .getElementsByTagNameNS("http://search.yahoo.com/mrss/", "thumbnail")
          .item(0)!;
        podcastCards.append(
          createCard({
            title: item.querySelector("title")!.textContent!,
            videoId: item
              .getElementsByTagNameNS(
                "http://www.youtube.com/xml/schemas/2015",
                "videoId"
              )
              .item(0)!.textContent!,
            thumbnail: {
              url: thumbnail.getAttribute("url")!,
              width: thumbnail.getAttribute("width")!,
              height: thumbnail.getAttribute("height")!,
            },
          })
        );
      }
      podcastContainer.append(podcastCards);
      podcastContainer.classList.remove("loading");
    })
    .catch((cause) => {
      console.log(cause);
      console.error(new Error("Failed to load RSS feed", { cause }));
    });
}

export {};
