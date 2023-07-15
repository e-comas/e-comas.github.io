import autoScroll from "./auto-scroll.ts";
for (const elem of document.querySelectorAll("[data-auto-slide-delay]")) {
  autoScroll(elem, Number((elem as HTMLElement).dataset.autoSlideDelay));
}
