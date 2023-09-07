var details = document.querySelector("details");
details?.addEventListener("toggle", function () {
  if (details?.hasAttribute("open")) {
    document.body.classList.add("noScroll");
  } else {
    document.body.classList.remove("noScroll");
  }
});

export {};
