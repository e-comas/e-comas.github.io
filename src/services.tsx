import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import FourStepApproach from "./views/FourStepApproach.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";

import "./classic-page.scss";

export default (
  <Body title="Strategy">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/chess.svg">
        <h2>Services</h2>
        <h3>Our secret recipe: the 4 pillars of ecommerce</h3>

        <p>
          We base everything we do on our eCommerce Growth Model, also called
          the <strong>4 pillars of ecommerce</strong>: Strategy – operations –
          conversion – traffic.
          <br />
          These 4 pillars bring proven results for our customers again and
          again.
        </p>
      </ElementWithIcon>

      <FourStepApproach />

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>Website creation</h2>

            <p>
              We proudly partner with Shopify, the leading ecommerce platform
              allowing brands to build and manage their own standalone online
              retail stores.
            </p>

            <a href="/website-creation.html" class="cta">
              Learn more
            </a>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h2>Analytics</h2>

            <p>
              We proudly partner with Profitero, the actionable ecommerce
              insights platform, to help our customers harness the vast amount
              of data available to them on Amazon, Shopify and other
              marketplaces.
            </p>

            <a href="/analytics.html" class="cta">
              Learn more
            </a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
