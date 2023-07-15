import { getConsent } from "./cookie_consent.ts";

function generateIFrame(target: HTMLElement) {
  const iframe = document.createElement("iframe");
  iframe.height = target.offsetHeight as unknown as string;
  iframe.width = target.offsetWidth as unknown as string;
  iframe.title = "YouTube video player";
  iframe.src = target.dataset.embed as string;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", "");
  const { parentElement } = target as { parentElement: Element };
  parentElement.classList.add("video-loading");
  iframe.addEventListener("load", () => {
    parentElement.classList.remove("video-link");
    parentElement.classList.remove("video-loading");
    parentElement.classList.add("video-playing");
    requestAnimationFrame(() => iframe.contentWindow!.focus());
  });
  target.replaceWith(iframe);
}

export function clickHandler(this: HTMLAnchorElement, e: MouseEvent) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  const consent = getConsent();

  if (!consent) return;
  e.preventDefault();

  if (consent === "yes") generateIFrame(this);
  else
    (consent as Promise<void>).then(
      () => generateIFrame(this),
      () => {
        window.open(this.href);
      }
    );
}
