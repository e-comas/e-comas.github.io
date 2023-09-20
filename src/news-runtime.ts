const tags = new Set() as Set<string>;
const tagsCache = new WeakMap() as Map<HTMLElement, string[]>;
const articles = document.querySelectorAll(
  "main>section>article"
) as NodeListOf<HTMLElement>;

const categoriesArticles = new Map(
  ["#Strategy", "#Operations", "#Content", "#Advertising"].map((category) => [
    category,
    [],
  ])
) as Map<string, HTMLElement[]>;

for (const article of articles) {
  tagsCache.set(
    article,
    Array.from(article.querySelectorAll(".tags>li"), (li) => {
      const tag = "#" + li.textContent;

      categoriesArticles.get(tag)?.push(article);

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
    option.value = tag;
    return option;
  })
);
const filterField = document.createElement("input");
filterField.type = "search";
filterField.placeholder = "Filter by tag";
filterField.setAttribute("aria-label", filterField.placeholder);
filterField.setAttribute("list", dataList.id);
const updateSearch = () => {
  location.hash = filterField.value;
};
filterField.addEventListener("change", updateSearch);
filterField.addEventListener("search", updateSearch);
document.querySelector("main>aside")!.append(
  dataList,
  filterField,
  ...Array.from(categoriesArticles, ([category, articles]) => {
    const link = document.createElement("a");
    link.textContent = category;
    link.href = category;
    link.className = "cta tag";
    return [
      link,
      ...Array.from(
        new Set(articles.flatMap((article) => tagsCache.get(article))),
        (tag) => {
          if (tag == null || tag === category)
            return document.createDocumentFragment();

          const link = document.createElement("a");
          link.textContent = tag;
          link.href = tag;
          link.className = "tag";
          return link;
        }
      ),
    ];
  }).flat()
);

const style: HTMLStyleElement = document.createElement("style");
function filter() {
  const hasTag = tags.has(location.hash);
  for (const article of articles) {
    article.hidden = hasTag && !tagsCache.get(article)!.includes(location.hash);
  }
  if (hasTag) {
    filterField.value = location.hash;
    document.head.append(style);
    style.sheet!.insertRule(
      `a.tag:not(.cta)[href=${JSON.stringify(location.hash)}]{color:#65D7BE}`,
      0
    );
    style.sheet!.insertRule(
      `a.cta.tag[href=${JSON.stringify(
        location.hash
      )}]{background-color:#65D7BE}`,
      1
    );
  } else {
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
