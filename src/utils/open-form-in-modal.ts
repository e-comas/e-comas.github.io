let modal: HTMLDialogElement;
function clickHandler(ev: Event) {
  ev.preventDefault();
  const iframe = document.createElement("iframe");
  iframe.src = (ev.target as HTMLAnchorElement).href;
  iframe.width = "100%";
  iframe.height = (window.innerHeight * 0.75 - 40) as any as string;
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
  for (const link of document.querySelectorAll(".open-in-modal")) {
    link.addEventListener("click", clickHandler);
  }
}

export {};
