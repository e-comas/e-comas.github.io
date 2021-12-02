import { clickHandler } from "./yt-embeder.js";
import fetchRSSFeed from "./rss_feed.js";
import autoScroll from "./auto-scroll.js";

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
  thumbnail.alt = item.title;
  thumbnail.className = "background";
  thumbnail.width = item.thumbnail.width;
  thumbnail.height = item.thumbnail.height;

  box.append(thumbnail, playLink);
  return box;
}

fetchRSSFeed(
  document.getElementById("webinars"),
  `https://e-comas-cors.herokuapp.com/${encodeURI(
    "https://www.youtube.com/feeds/videos.xml?playlist_id=PLIISXNQzZ8ZrvjOjGsK9iJykSn_x6xO3k"
  )}`,
  "feed>entry",
  (item, parent) => {
    const thumbnail = item
      .getElementsByTagNameNS("http://search.yahoo.com/mrss/", "group")
      .item(0)!
      .getElementsByTagNameNS("http://search.yahoo.com/mrss/", "thumbnail")
      .item(0)!;
    parent.append(
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
          width: thumbnail.getAttribute("width") as any as number,
          height: thumbnail.getAttribute("height") as any as number,
        },
      })
    );
  }
).then((webinarContainer) => autoScroll(webinarContainer, 4000), console.warn);

export {};
