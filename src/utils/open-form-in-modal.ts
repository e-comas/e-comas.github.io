const links = document.querySelectorAll(".open-in-modal");
let modal: HTMLDialogElement;
addEventListener("message", (e) => {
  if (typeof e.data === "number" && modal?.firstChild != null) {
    (modal.firstChild as HTMLIFrameElement).height = (e.data +
      5) as any as string;
  }
});
function clickHandler(ev: Event) {
  ev.preventDefault();
  const iframe = document.createElement("iframe");
  iframe.src = (ev.target as HTMLAnchorElement).href;
  iframe.width = "100%";
  if (modal == null) {
    modal = document.createElement("dialog");
    modal.className = "form-in-modal";
    modal.append(iframe);
    document.body.append(modal);
  } else if (modal.firstChild) {
    modal.replaceChild(iframe, modal.firstChild);
  } else {
    modal.append(iframe);
  }

  modal.showModal();
}
if ("HTMLDialogElement" in window) {
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
}

export {};
