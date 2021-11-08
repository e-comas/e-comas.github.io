const cache = new WeakMap();
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      cache.get(entry.target)?.(entry.isIntersecting);
    }
  },
  { threshold: [1] }
);

function autoScroll(elem: Element) {
  const delay = Number((elem as HTMLElement).dataset.autoSlideDelay);
  let currentFocused: Element | null;
  function slideToNext() {
    currentFocused =
      currentFocused?.nextElementSibling || elem.firstElementChild;
    currentFocused!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  observer.observe(elem);
  let interval: number;
  return (isIntesecting: boolean) => {
    if (isIntesecting) {
      interval = setInterval(slideToNext, delay) as any;
    } else {
      clearInterval(interval);
    }
  };
}

for (const elem of document.querySelectorAll("[data-auto-slide-delay]")) {
  cache.set(elem, autoScroll(elem));
}

export {};
