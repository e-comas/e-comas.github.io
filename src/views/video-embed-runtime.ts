import { clickHandler } from "../utils/yt-embeder.ts";

for (const embed of document.querySelectorAll(".video-link>a[data-embed]")) {
  embed.addEventListener("click", clickHandler as any, { once: true });
}

export {};
