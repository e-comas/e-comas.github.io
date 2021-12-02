export function clickHandler(this: HTMLElement, e: MouseEvent) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  e.preventDefault();
  const iframe = document.createElement("iframe");
  iframe.height = this.offsetHeight as unknown as string;
  iframe.width = this.offsetWidth as unknown as string;
  iframe.title = "YouTube video player";
  iframe.src = this.dataset.embed as string;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", "");
  const { parentElement } = this as { parentElement: Element };
  parentElement.classList.add("video-loading");
  iframe.addEventListener("load", () => {
    parentElement.classList.remove("video-link");
    parentElement.classList.remove("video-loading");
    parentElement.classList.add("video-playing");
  });
  this.replaceWith(iframe);
}
