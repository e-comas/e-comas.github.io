import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.js";

import "./Partners.scss";

export default () => (
  <section class="partners">
    <h2>Partners we trust</h2>
    <div>
      <a href="salsify.html">
        <img alt="Salsify" src="/images/partners/salsify.svg" />
      </a>
      <a href="website-creation.html#Shopify">
        <img alt="Shopify" src="/images/partners/shopify.svg" />
      </a>
      <a href="analytics.html#Profitero">
        <img alt="Profitero" src="/images/partners/profitero.svg" />
      </a>
      <a href="partners.html#Reveals">
        <Picture alt="Reveals" src="/images/partners/reveals.png" />
      </a>
    </div>
  </section>
);
