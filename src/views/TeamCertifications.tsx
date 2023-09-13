import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.tsx";
import "./TeamCertifications.scss";

export default () => (
  <section class="certifications">
    {/* TODO? try getting SVGs for all of those */}
    <h2>Certifications:</h2>
    <div role="list">
      <a
        href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.cj3vydv54i8qcb80mhstj0em0/"
        target="_blank"
        rel="noopener"
        role="listitem"
      >
        <Picture
          src="/images/certifications/Verified partner badge.png"
          alt="Amazon Ads Verified Partner badge"
        />
      </a>
      <a
        href="https://sellercentral.amazon.com/gspn/provider-details/Advertising%20Optimization/29c1240a-ec5f-4b3b-ba87-98955093c9a2?ref_=sc_gspn_alst_adt-29c1240a"
        target="_blank"
        rel="noopener"
        role="listitem"
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
        role="listitem"
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
        role="listitem"
      >
        <img
          src="/images/certifications/Google Partner.svg"
          alt="Google Partner certification badge"
        />
      </a>
      <a
        href="https://profiles.forbes.com/u/d139bcfc-f77c-43fe-bd6f-3db5f2f23543"
        target="_blank"
        rel="noopener"
        role="listitem"
      >
        <img
          src="/images/certifications/ForbesBC.svg"
          alt="Forbes Business Council official partner 2022 badge"
        />
        <p>Jérôme de Guigné</p>
      </a>
      <a
        href="https://prospershow.com/advisory-council/"
        target="_blank"
        rel="noopener"
        role="listitem"
      >
        <Picture
          alt="Prosper advisory council member badge"
          src="/images/certifications/Prosper advisory council member.png"
        />
        <p>Jérôme de Guigné</p>
      </a>
    </div>
  </section>
);
