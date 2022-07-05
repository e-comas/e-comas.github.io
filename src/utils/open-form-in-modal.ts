let modal: HTMLDialogElement;
function clickHandler(ev: Event) {
  ev.preventDefault();

  if (modal == null) {
    const modalCloseForm = document.createElement("form");
    const modalCloseFormWrapper = document.createElement("div");
    const modalCloseButton = document.createElement("button");
    modalCloseForm.method = "dialog";
    modalCloseButton.type = "submit";
    modalCloseButton.title = "Dismiss and close";
    modalCloseButton.append("❌");
    modalCloseFormWrapper.append(modalCloseButton);
    modalCloseForm.append(modalCloseFormWrapper);

    const iframe = document.createElement("iframe");
    iframe.width = "100%";

    modal = document.createElement("dialog");
    modal.className = "form-in-modal";
    modal.append(modalCloseForm, iframe);
    document.body.append(modal);
  }

  const iframe = modal.lastChild as HTMLIFrameElement;
  const targetSrc = (ev.target as HTMLAnchorElement).href;
  if (iframe.src !== targetSrc) iframe.src = targetSrc;
  iframe.height = (window.innerHeight * 0.75 - 40) as any as string;

  modal.showModal();
}
if ("HTMLDialogElement" in window) {
  for (const link of document.querySelectorAll(".open-in-modal")) {
    link.addEventListener("click", clickHandler);
  }
}

export {};
