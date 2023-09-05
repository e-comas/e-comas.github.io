import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.tsx";

import "./Partners.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title?: string;
}

export default (props: Props | undefined, children: JSX.Element[]) => (
  <section class="partners">
    <h2>{props?.title ?? "Our Partners"}</h2>
    {...children.splice(0)}
    <div role="list">
      <a role="listitem" href="salsify.html">
        <img alt="Salsify" src="/images/partners/salsify.svg" />
      </a>
      <a role="listitem" href="website-creation.html#Shopify">
        <img alt="Shopify" src="/images/partners/shopify.svg" />
      </a>
      <a role="listitem" href="profitero.html">
        <img alt="Profitero" src="/images/partners/profitero.svg" />
      </a>
      <a role="listitem" href="reveals.html">
        <Picture alt="Reveals" src="/images/partners/reveals.png" />
      </a>
    </div>
  </section>
);
