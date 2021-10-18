function clickHandler(this: HTMLElement, e: Event) {
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
  });
  this.replaceWith(iframe);
}

for (const embed of document.querySelectorAll(".video-link>a[data-embed]")) {
  embed.addEventListener("click", clickHandler, { once: true });
}

export {};
