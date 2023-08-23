const cache = new WeakMap();

const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("play-animation");
    }
  });
});

function activate() {
  for (const elem of document.querySelectorAll(".animate-once")) {
    observer.observe(elem);
  }
}
function deactivate() {
  observer.disconnect();
}

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
