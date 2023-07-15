import { getConsent } from "./cookie_consent.ts";

function clickHandler(this: HTMLAnchorElement, e: MouseEvent) {
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

let modal: HTMLDialogElement;
function generateIFrame(target: HTMLAnchorElement) {
  let parentFigure: HTMLElement = target;
  do {
    parentFigure = parentFigure.parentElement!;
  } while (
    parentFigure != null &&
    parentFigure.nodeName.toLowerCase() !== "figure"
  );
  if (parentFigure?.id) {
    location.hash = parentFigure.id;
  }
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
    iframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-scripts allow-popups allow-forms"
    );

    modal = document.createElement("dialog");
    modal.addEventListener("close", () => {
      location.hash = "/";
    });
    modal.className = "form-in-modal";
    modal.append(modalCloseForm, iframe);
    document.body.append(modal);
  }

  const iframe = modal.lastChild as HTMLIFrameElement;
  const targetSrc = target.href;
  if (iframe.src !== targetSrc) iframe.src = targetSrc;
  iframe.height = (window.innerHeight * 0.75 - 40) as any as string;

  if (!modal.open) modal.showModal();
}
if ("HTMLDialogElement" in window) {
  const linkSelector = ".open-in-modal";
  for (const link of document.querySelectorAll(linkSelector)) {
    link.addEventListener("click", clickHandler as any);
  }

  const onHashChange = (ev?: HashChangeEvent | PopStateEvent) => {
    const target = document.getElementById(location.hash.replace(/^#/, ""));
    const linkTarget = target?.querySelector(linkSelector);
    if (linkTarget == null) {
      modal?.close();
      ev?.preventDefault?.();
    } else {
      Reflect.apply(clickHandler, linkTarget, [{ preventDefault() {} }]);
    }
  };
  addEventListener("hashchange", onHashChange);
  addEventListener("popstate", onHashChange);
  onHashChange();
}

export {};
