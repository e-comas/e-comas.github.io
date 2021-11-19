import { h } from "@aduh95/async-jsx";

import "./HoverableMenu.scss";

export default (props: any, children: any[]) => (
  <div class="hoverable-menu">
    {children.map(async (child) => {
      child = await child;
      child.setAttribute("onclick", "");
      return child;
    })}
  </div>
);
