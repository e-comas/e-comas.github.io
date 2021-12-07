const addresses = document.querySelector("footer .addresses")!;
const addressesCache = new WeakMap();

const addressWrapper = document.createElement("li");
addresses.parentElement!.parentElement!.append(addressWrapper);

let currentLink: HTMLAnchorElement;
function clickHandler(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  if (currentLink) {
    currentLink.style.textDecoration = "none";
    addressesCache.get(currentLink).remove();
  }
  this.style.textDecoration = "underline";
  currentLink = this;
  addressWrapper.append(addressesCache.get(this));
}

addresses.replaceWith(
  ...Array.from(addresses.children, (child, i) => {
    const link = document.createElement("a");
    link.href = "#";
    addressesCache.set(link, child.querySelector("address"));
    link.textContent = child.firstElementChild!.textContent;
    link.style.textDecoration = "none";
    link.addEventListener("click", clickHandler);
    return link;
  }).flatMap((link, i) => [i ? " | " : " ", link])
);

export {};
