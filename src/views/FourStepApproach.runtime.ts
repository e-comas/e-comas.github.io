const scale = 0.5;

function animate(
  obj: SVGElement | HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
) {
  const animation = obj.animate(keyframes, options);
  obj.style.visibility = "unset";
  return animation.finished;
}

async function runAnimation({ target }: IntersectionObserverEntry) {
  deactivate();
  for (const child of target.children) {
    for (const grandChild of child.children) {
      if (grandChild.tagName === "svg") {
        Array.from(grandChild.children).forEach(
          (path) => ((path as SVGElement).style.visibility = "hidden")
        );
      } else {
        (grandChild as HTMLElement).style.visibility = "hidden";
      }
    }
  }

  (target as HTMLElement).style.visibility = "unset";
  let associatedText = target.nextElementSibling as HTMLElement;
  for (const child of target.children) {
    const [illustration, title] = child.children;

    await Promise.all([
      animate(
        illustration as HTMLElement,
        [
          { transform: "scale(0)", transformOrigin: "bottom" },
          { transform: "scale(1)", transformOrigin: "bottom" },
        ],
        { duration: scale * 300 }
      ),
      animate(
        title as HTMLElement,
        [
          { transform: "scale(0)", transformOrigin: "top" },
          { transform: "scale(1)", transformOrigin: "top" },
        ],
        { duration: scale * 300 }
      ),
    ]);

    const [circle, stick, arrow] = child.querySelectorAll(
      "svg>path"
    ) as NodeListOf<SVGElement>;

    await animate(
      circle,
      [{ strokeDashoffset: 1376 }, { strokeDashoffset: 0 }],
      { duration: scale * 1376 }
    );

    await animate(stick, [{ strokeDashoffset: 272 }, { strokeDashoffset: 0 }], {
      duration: scale * 272,
    });

    await animate(
      arrow,
      [
        { transform: "scale(0)", transformOrigin: "top right" },
        { transform: "scale(1)", transformOrigin: "top right" },
      ],
      { duration: scale * 71 }
    );

    associatedText.style.visibility = "unset";
    await animate(associatedText, [{ opacity: "0" }, { opacity: "1" }], {
      duration: scale * 710,
    });
    associatedText = associatedText.nextElementSibling as HTMLElement;
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => runAnimation(entry));
      }
    }
  },
  { threshold: [0.5] }
);

function activate() {
  for (let elem of document.querySelectorAll(".four-step>ol")) {
    observer.observe(elem);
    do {
      (elem as HTMLElement).style.visibility = "hidden";
      elem = elem.nextElementSibling!;
    } while (elem);
  }
}

function deactivate() {
  observer.disconnect();
}

const mediaQuery = matchMedia(
  "(prefers-reduced-motion: reduce),(max-width: 899px)"
);

function toggle() {
  if (mediaQuery.matches) {
    console.log("deactivate");
    deactivate();
  } else {
    console.log("activate");
    activate();
  }
}

mediaQuery.addEventListener("change", toggle);
toggle();

export {};
