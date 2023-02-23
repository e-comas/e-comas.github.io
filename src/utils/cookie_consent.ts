const CLASS_NAME = "ask-consent";
let previousConsent = localStorage.getItem("cookie-consent");
let immediateConsent: boolean = false;

interface HTMLDialogElement extends HTMLElement {
  showModal: () => void;
}

function toggleConsent(userConsent: boolean) {
  localStorage.setItem(
    "cookie-consent",
    (previousConsent = userConsent ? "yes" : "")
  );
}

function createDialog() {
  const dialog = document.createElement("dialog") as HTMLDialogElement;
  dialog.id = CLASS_NAME;
  const areDialogNotSupported = typeof dialog.showModal !== "function";

  {
    const heading = document.createElement("h2");
    heading.textContent = "Cookie settings";
    heading.id = CLASS_NAME + "-heading";
    dialog.setAttribute("aria-labelledby", heading.id);
    const p = document.createElement("p");
    p.id = CLASS_NAME + "-description";
    dialog.setAttribute("aria-describedby", p.id);
    const strong = document.createElement("strong");
    let previousConsentInfo: Array<string | HTMLElement> = [
      " You have previously ",
      strong,
      " the use of cookies.",
    ];
    switch (previousConsent) {
      case "":
        // Content was denied.
        strong.textContent = "declined";
        break;

      case "yes":
        // Consent was provided.
        strong.textContent = "accepted";
        break;

      default:
        previousConsentInfo = [];
    }
    const privacyLink = document.createElement("a");
    privacyLink.href = "/privacy.html";
    privacyLink.textContent = "privacy policy";
    p.append(
      "Some parts of this website that relies on third-party content that might" +
        " store cookies on your computer. You can read more about this in our ",
      privacyLink,
      ".",
      ...previousConsentInfo
    );
    const form = document.createElement("form");
    form.method = "dialog";
    const formElementsWrapper = document.createElement("div");
    const optOutButton = document.createElement("input");
    optOutButton.type = "submit";
    optOutButton.name = "no";
    optOutButton.value = "Decline and close";
    const optInButton = document.createElement("input");
    optInButton.type = "submit";
    optInButton.name = "yes";
    optInButton.autofocus = true;
    optInButton.value = "Accept and close";
    const optInOnceButton = document.createElement("input");
    optInOnceButton.type = "submit";
    optInOnceButton.className = "once";
    optInOnceButton.name = "once";
    optInOnceButton.value = "Yes, but keep asking me";
    const optOutOnceButton = document.createElement("input");
    optOutOnceButton.type = "submit";
    optOutOnceButton.className = "once";
    optOutOnceButton.name = "maybe-later";
    optOutOnceButton.value = "Not this time, decide later";

    if (previousConsent == null) {
      const optInWrapper = document.createElement("div");
      const optOutWrapper = document.createElement("div");
      optInWrapper.append(optInOnceButton, optInButton);
      optOutWrapper.append(optOutOnceButton, optOutButton);
      formElementsWrapper.append(optOutWrapper, optInWrapper);
    } else {
      formElementsWrapper.append(optInButton, optOutButton);
    }
    form.append(formElementsWrapper);
    dialog.append(heading, p, form);
    form.addEventListener("submit", (e) => {
      const button = (e.submitter as HTMLInputElement | null)?.name;
      if (button !== "once" && button !== "maybe-later") {
        toggleConsent(button === "yes");
      }
      immediateConsent = button === "yes" || button === "once";
      if (areDialogNotSupported) {
        e.preventDefault();
        dialog.remove();
      }
    });
  }
  if (areDialogNotSupported) {
    dialog.showModal = function () {
      this.classList.add(CLASS_NAME);
    };
  }
  return dialog;
}

let currentDialogPromise: Promise<void> | undefined | null;
function showModal(e?: Event | null, createPromise?: boolean) {
  e?.preventDefault?.();
  if (currentDialogPromise != null) return currentDialogPromise;
  const dialog = createDialog();
  document.body.append(dialog);
  dialog.showModal();
  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  if (createPromise) {
    return (currentDialogPromise = new Promise<void>((resolve, reject) => {
      dialog.addEventListener(
        "close",
        () => {
          if (immediateConsent) resolve();
          else reject();
          immediateConsent = false;
          // The "once" consent is valid for 1s I decided.
          setTimeout(() => {
            currentDialogPromise = null;
          }, 999);
        },
        { once: true }
      );
    }));
  }
}

const li = document.createElement("li");
const link = document.createElement("a");
link.addEventListener("click", showModal);
link.href = "#";
link.textContent = "Cookie settings";
li.append(link);
document.querySelector("footer ul")?.append(li);

export function getConsent() {
  if (previousConsent == null) {
    return showModal(null, true);
  } else return previousConsent;
}
