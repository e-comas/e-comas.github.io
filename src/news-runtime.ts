const tags = new Set() as Set<string>;
const tagsCache = new WeakMap() as Map<HTMLElement, string[]>;
const articles = document.querySelectorAll(
  "main>article"
) as NodeListOf<HTMLElement>;

for (const article of articles) {
  tagsCache.set(
    article,
    Array.from(article.querySelectorAll(".tags>li"), (li) => {
      const tag = "#" + li.textContent;

      const link = document.createElement("a");
      link.href = tag;
      link.append(li.firstChild!);
      li.append(link);

      tags.add(tag);
      return tag;
    })
  );
}

const scrollDownMenu = document.createElement("select");
const firstOption = document.createElement("option");
firstOption.text = "No filter";
firstOption.value = "";
scrollDownMenu.append(
  firstOption,
  ...Array.from(tags, (tag) => {
    const option = document.createElement("option");
    option.text = tag;
    return option;
  })
);
scrollDownMenu.addEventListener("change", (e) => {
  location.hash = scrollDownMenu.value;
});
document.querySelector("main>h2")!.after(scrollDownMenu);

function filter() {
  if (tags.has(location.hash)) {
    for (const article of articles) {
      article.hidden = !tagsCache.get(article)!.includes(location.hash);
    }
    scrollDownMenu.value = location.hash;
  } else {
    for (const article of articles) {
      article.hidden = false;
    }
    firstOption.selected = true;
  }
  scrollDownMenu.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}

addEventListener("hashchange", filter);
filter();

export {};
