const details = document.querySelector("details");
details?.addEventListener("toggle", function () {
  if (details?.hasAttribute("open")) {
    document.body.classList.add("noScroll");
  } else {
    document.body.classList.remove("noScroll");
  }
});

export {};

// I hate react, and I hate that I have to do that top get things working
// I kinda hope it doesn't work
for (let div of document.body
  .getElementsByTagName("header")[0]
  .getElementsByTagName("nav")[0]
  .getElementsByTagName("div")) {
  div.setAttribute("onclick", " ");
}
