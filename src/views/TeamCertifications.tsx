import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.js";
import "./Partners.scss";

export default () => (
  <section class="partners">
    <h2>Team certifications:</h2>
    <div role="list">
      <a
        href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.cj3vydv54i8qcb80mhstj0em0/"
        target="_blank"
        rel="noopener"
      >
        <img src="/images/brands/Amazon Ads.svg" alt="Amazon Ads" />
      </a>
      <a target="_blank" rel="noopener">
        <Picture
          src="/images/brands/Amazon Seller Central.png"
          alt="Amazon Seller Central"
        />
      </a>
      <a>Salsify</a>
      <a
        href="https://www.google.com/partners/agency?id=3553874603"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/images/brands/Google Partner.svg"
          alt="Google Partner certification badge"
        />
      </a>
    </div>
  </section>
);
