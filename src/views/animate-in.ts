const cache = new WeakMap();

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        requestAnimationFrame(cache.get(entry.target));
      }
    }
  },
  { threshold: 0.05 }
);

function activate() {
  for (const elem of document.querySelectorAll(".animate-in")) {
    const { style } = elem as HTMLElement;
    style.setProperty("--animate-in-transform", "200%");
    cache.set(elem, () => {
      setTimeout(() => {
        style.setProperty("--animate-in-transform", "0");
      }, 100);
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elem.classList.add("animate-in-ready");
      });
    });
    observer.observe(elem);
  }
}

function deactivate() {
  for (const elem of document.querySelectorAll(".animate-in")) {
    const { classList, style } = elem as HTMLElement;
    classList.remove("animate-in-ready");
    style.removeProperty("--animate-in-transform");
  }
  observer.disconnect();
}

const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");

function toggle() {
  if (mediaQuery.matches) {
    deactivate();
  } else {
    activate();
  }
}

mediaQuery.addEventListener("change", toggle);
toggle();

export {};
