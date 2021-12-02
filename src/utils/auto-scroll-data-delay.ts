import autoScroll from "./auto-scroll.js";
for (const elem of document.querySelectorAll("[data-auto-slide-delay]")) {
  autoScroll(elem, Number((elem as HTMLElement).dataset.autoSlideDelay));
}
