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
      link.className = "tag";
      link.append(li.firstChild!);
      li.append(link);

      tags.add(tag);
      return tag;
    })
  );
}

const dataList = document.createElement("datalist");
dataList.id = "tags-list";
dataList.append(
  ...Array.from(tags, (tag) => {
    const option = document.createElement("option");
    option.text = tag;
    return option;
  })
);
const filterField = document.createElement("input");
filterField.placeholder = "Filter by tag";
filterField.setAttribute("aria-label", filterField.placeholder);
filterField.setAttribute("list", dataList.id);
filterField.addEventListener("change", (e) => {
  location.hash = filterField.value;
});
document.querySelector("main>aside")!.append(
  dataList,
  filterField,
  ...Array.from(tags, (tag) => {
    const link = document.createElement("a");
    link.textContent = tag;
    link.href = tag;
    link.className = "tag";
    return link;
  })
);

const style: HTMLStyleElement = document.createElement("style");
function filter() {
  if (tags.has(location.hash)) {
    for (const article of articles) {
      article.hidden = !tagsCache.get(article)!.includes(location.hash);
    }
    filterField.value = location.hash;
    document.head.append(style);
    style.sheet!.insertRule(
      `a.tag[href=${JSON.stringify(location.hash)}]{color:#65D7BE}`,
      0
    );
  } else {
    for (const article of articles) {
      article.hidden = false;
    }
    filterField.value = "";
    style.remove();
  }
  filterField.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}

addEventListener("hashchange", filter);
filter();

export {};
