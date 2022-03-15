import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.js";
import NavLink from "../utils/NavLink.js";
import arborescence from "../utils/arborescence.toml";

import "./header.scss";

interface ArborescenceNode {
  name: string;
  url: string;
  children?: ArborescenceNode[];
}
function createNavLink(node: ArborescenceNode) {
  return node.url.startsWith("https://") ? (
    <a href={node.url} target="_blank" rel="noopener">
      {node.name}
    </a>
  ) : (
    <NavLink href={node.url}>{node.name}</NavLink>
  );
}
function layoutArborescence(node: ArborescenceNode) {
  return node.children?.length ? (
    <div>
      {createNavLink(node)}
      <ul>{node.children.map(createNavLink)}</ul>
    </div>
  ) : (
    createNavLink(node)
  );
}

export default () => (
  <ElementWithBackgroundImage
    tagName="header"
    src="/images/Banner1 Hero 3x .png"
  >
    <a href="#main-content" class="skip-nav">
      Skip navigation
    </a>

    <a href="/">
      <img
        src="/images/logo.svg"
        alt="e-Comas, eCommerce made simple"
        class="logo"
      />
    </a>
    <details>
      <summary aria-label="Open navigation menu" />
    </details>
    <nav>{arborescence.root.children.map(layoutArborescence)}</nav>
    <h1>eCommerce made simple.</h1>
  </ElementWithBackgroundImage>
);
