import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture";

import "./OurServices.scss";
import GlobalExpansion from "./GlobalExpansion.svg";
import RetailMedia from "./RetailMedia.svg";
import Technology from "./Technology.svg";

import "./animate-in.scss";
import "runtime:./animate-in.ts";

export default () => (
  <section id="our-services">
    <h3>Our services</h3>
    <p>
      Our three core service pillars are part of a greater whole, covering
      everything you need to power your brand’s growth across all major online
      platforms.
    </p>
    <figure class="animate-in">
      <Picture src="/images/consulting01.png" alt="illustration" />
      <figcaption>
        <GlobalExpansion />
        <h4>Global Expansion</h4>
        <p>
          Our team of ex-brand directors, ex-Amazonians and operational experts
          have successfully built brands for over a decade on Amazon and beyond.
          We speak the local languages and have strong partnerships with key
          eCommerce players to drive your business forward globally.
        </p>
        <a href="/global-expansion.html" class="cta">
          Learn more
        </a>
      </figcaption>
    </figure>
    <figure class="animate-in">
      <Picture src="/images/consulting02.png" alt="illustration" />
      <figcaption>
        <RetailMedia />
        <h4>Digital Retail Media</h4>
        <p>
          As an Amazon-verified partner and Google Ads-certified agency, we
          leverage the full capabilities of digital media platforms to expand
          your reach and grow your sales. We can handle your advertising
          campaigns, focusing on the metrics that matter to take your brand to
          new heights.
        </p>
        <a href="about:blank" class="cta">
          Learn more
        </a>
      </figcaption>
    </figure>
    <figure class="animate-in">
      <Picture src="/images/consulting03.png" alt="illustration" />
      <figcaption>
        <Technology />
        <h4>Technology & Data</h4>
        <p>
          Get better visibility over your business and make data-driven
          decisions that propel growth. Our specialists use the latest tech to
          define the right KPIs for your business, automate processes and give
          you a holistic view of customer habits and experiences, major trends
          and more.
        </p>
        <a href="about:blank" class="cta">
          Learn more
        </a>
      </figcaption>
    </figure>
  </section>
);
