import { h } from "@aduh95/async-jsx";

import arborescence from "../utils/arborescence.toml";

import "./Breadcrumbs.scss";

interface ArborescenceLeaf {
  name: string;
  url: string;
  children?: ArborescenceLeaf[];
}

const pages = new Map();
const flatten = (
  { name, url, children }: ArborescenceLeaf,
  parent: string | null = null
) => {
  pages.set(url, { name, url, parent });
  children?.forEach((child) => flatten(child, url));
};
const unflatten = (url: string) => {
  let page = pages.get(url);
  if (page == null) return "Page is not in the arborescence";
  const returnVal = [<li>{page.name}</li>];
  while (page.parent != null) {
    returnVal.unshift(
      <li>
        <a href={page.parent}>{(page = pages.get(page.parent)).name}</a>
      </li>
    );
  }
  return returnVal;
};
flatten(arborescence.root);

export default () =>
  h(
    "ul",
    { class: "breadcrumbs" } as any,
    unflatten(location.pathname)
  ) as JSX.Element;
