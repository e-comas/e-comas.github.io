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
  for (const elem of document.querySelectorAll("section.about-us")) {
    const { style } = elem as HTMLElement;
    cache.set(elem, () => {
      const elements = Array.from(elem.querySelectorAll(".animatable"));
      for (let i = 0; i < elements.length; i++) {
        elements[i].animate(
          [
            ...Array(i).fill({ opacity: 0, transform: "translateY(200%)" }),
            ...Array(elements.length - i).fill({
              opacity: 1,
              transform: "translateY(0%)",
            }),
          ],
          {
            duration: 300 * elements.length,
          }
        ).finished;
      }
    });
    observer.observe(elem);
  }
}

function deactivate() {
  for (const elem of document.querySelectorAll("section.about-us")) {
    const { classList, style } = elem as HTMLElement;
    classList.remove("animate-in-ready");
    style.removeProperty("--animate-in-transform");
    cache.delete(elem);
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
