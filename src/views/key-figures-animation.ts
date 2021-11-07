const cache = new WeakMap();

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        requestAnimationFrame(cache.get(entry.target));
      }
    }
  },
  { threshold: [0] }
);

function animateValue(
  obj: Element,
  start: number,
  end: number,
  duration: number,
  formatter: Intl.NumberFormat
) {
  let startTimestamp: number | null;
  const step = (timestamp: number) => {
    startTimestamp ??= timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = formatter.format(progress * (end - start) + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      startTimestamp = null;
    }
  };
  return step;
}

function activate() {
  for (const elem of document.querySelectorAll("[data-count-to]")) {
    const { dataset } = elem as HTMLElement;
    const end = Number(dataset.countTo);
    const formatter = new Intl.NumberFormat("fr", {
      signDisplay: "always",
      maximumFractionDigits: 0,
      minimumIntegerDigits: Math.floor(Math.log10(end)) + 1,
      ...(dataset.currency
        ? { style: "currency", currency: dataset.currency }
        : {}),
    });
    cache.set(elem, animateValue(elem, 0, end, 2000, formatter));
    observer.observe(elem);
  }
}

function deactivate() {
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
