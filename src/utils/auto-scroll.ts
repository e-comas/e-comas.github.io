const cache = new WeakMap();
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      cache.get(entry.target)?.(entry.isIntersecting);
    }
  },
  { threshold: [1] }
);

function autoScroll(elem: Element, delay: number) {
  let currentFocused: Element | null;

  elem.classList.add("js-auto-slide");
  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.setAttribute("aria-label", "Slide to previous item");
  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Slide to next item");
  elem.append(previousButton, nextButton);

  let interval: number;
  function slide() {
    currentFocused!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function slideToPrevious() {
    currentFocused =
      currentFocused?.previousElementSibling || elem.lastElementChild;
    if (currentFocused == previousButton || currentFocused === nextButton) {
      currentFocused = previousButton.previousElementSibling;
    }
    slide();
  }
  function slideToNext() {
    currentFocused =
      currentFocused?.nextElementSibling || elem.firstElementChild;
    if (currentFocused == previousButton || currentFocused === nextButton) {
      currentFocused = elem.firstElementChild;
    }
    slide();
  }
  function clickOnButton() {
    clearInterval(interval);
    currentFocused ??= elem.firstElementChild;
  }
  previousButton.addEventListener("click", clickOnButton);
  nextButton.addEventListener("click", clickOnButton);
  previousButton.addEventListener("click", slideToPrevious);
  nextButton.addEventListener("click", slideToNext);

  function onWheel(event: WheelEvent) {
    if (Math.abs(event.deltaX) > 20) {
      clearInterval(interval);
    }
  }
  elem.addEventListener("wheel", onWheel as any, { passive: true });

  observer.observe(elem);
  return (isIntesecting: boolean) => {
    if (isIntesecting) {
      interval = setInterval(slideToNext, delay) as any;
    } else {
      clearInterval(interval);
    }
  };
}

export default function addAutoScroll(elem: Element, delay: number) {
  cache.set(elem, autoScroll(elem, delay));
}

export {};
