import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.js";

import "./Partners.scss";

export default () => (
  <section class="partners">
    <h2>Partners we trust</h2>
    <div>
      <a href="partners.html#Reveals">
        <img alt="Reveals" />
      </a>
      <a href="syndication.html#Salsify">
        <img alt="Salsify" src="/images/partners/salsify.svg" />
      </a>
      <a href="website_creation.html#Shopify">
        <img alt="Shopify" src="/images/partners/shopify.svg" />
      </a>
      <a href="analytics.html#Profitero">
        <img alt="Profitero" src="/images/partners/profitero.svg" />
      </a>
      <a href="partners.html#Storfund">
        <img alt="Storfund" src="/images/partners/storfund.svg" />
      </a>
      <a href="partners.html#GETIDA">
        <Picture alt="GETIDA" src="/images/partners/getida.png" />
      </a>
      <a href="partners.html#Payoneer">
        <Picture alt="Payoneer" src="/images/partners/payoneer.png" />
      </a>
    </div>
  </section>
);
