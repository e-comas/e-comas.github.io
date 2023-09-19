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
      <a role="listitem" href="partners.html#pacvue">
        <img alt="Profitero" src="/images/partners/pacvue.svg" />
      </a>
      <a role="listitem" href="partners.html#channelEngine">
        <Picture alt="Reveals" src="/images/partners/ChannelEngine.svg" />
      </a>
      <a role="listitem" href="partners.html#amazonAds">
        <Picture alt="Reveals" src="/images/partners/Amazon ADS.svg" />
      </a>
    </div>
    <a href="partners.html" class="cta">
      See more
    </a>
  </section>
);
