const details = document.querySelector("details");
details?.addEventListener("toggle", function () {
  if (details?.hasAttribute("open")) {
    document.body.classList.add("noScroll");
  } else {
    document.body.classList.remove("noScroll");
  }
});
addEventListener("resize", (event) => {
  if (window.innerWidth > 990) {
    details?.removeAttribute("open");
    document.body.classList.remove("noScroll");
  }
});

export {};

// I hate react, and I hate that I have to do that top get things working
// I kinda hope it doesn't work
for (let elem of document.body.getElementsByClassName("safariHover")) {
  elem.setAttribute("onclick", " ");
}

for (let elem of document.body.getElementsByClassName("safariActive")) {
  elem.setAttribute("ontouchstart", " ");
}
