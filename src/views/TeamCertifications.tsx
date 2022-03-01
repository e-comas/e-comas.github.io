import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.js";
import "./TeamCertifications.scss";

export default () => (
  <section class="certifications">
    <h2>Team certifications:</h2>
    <div role="list">
      <a
        href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.cj3vydv54i8qcb80mhstj0em0/"
        target="_blank"
        rel="noopener"
      >
        <img src="/images/certifications/Amazon Ads.svg" alt="Amazon Ads" />
      </a>
      <a
        href="https://sellercentral.amazon.com/gspn/provider-details/Advertising%20Optimization/29c1240a-ec5f-4b3b-ba87-98955093c9a2?ref_=sc_gspn_alst_adt-29c1240a"
        target="_blank"
        rel="noopener"
      >
        <Picture
          src="/images/certifications/Amazon Seller Central.png"
          alt="Amazon Seller Central Partner Network – Service Partner badge"
        />
      </a>
      <a
        href="https://www.salsify.com/salsify-e-comas-partnership"
        target="_blank"
        rel="noopener"
      >
        <Picture
          alt="Salsify Registered Partner badge"
          src="/images/certifications/Salsify.png"
        />
      </a>
      <a
        href="https://www.google.com/partners/agency?id=3553874603"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/images/certifications/Google Partner.svg"
          alt="Google Partner certification badge"
        />
      </a>
    </div>
  </section>
);
