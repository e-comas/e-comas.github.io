import { clickHandler } from "../utils/yt-embeder.js";

for (const embed of document.querySelectorAll(".video-link>a[data-embed]")) {
  embed.addEventListener("click", clickHandler, { once: true });
}

export {};
