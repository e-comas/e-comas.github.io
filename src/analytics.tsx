import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Analytics">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/search.svg">
        <h2>Analytics</h2>
        <p>Lorem ipsum</p>
      </ElementWithIcon>
      <section>
        <figure>
          <figcaption>
            <h2>Our partner : Profitero</h2>

            <p>
              We proudly partner with Profitero, the actionable ecommerce
              insights platform, to help our customers harness the vast amount
              of data available to them on Amazon, Shopify and other
              marketplaces.
            </p>

            <p>
              Profitero’s insights combined with e-Comas’s expertise in
              advertising, content and supply chain optimisation give you huge
              opportunities for growth. You can stretch your limited team
              resources and achieve fast ROI.
            </p>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Here’s an example of what they do: </h3>
            <ul>
              <li>
                Profitero’s client makes a product that competes with a famous
                brand.
              </li>
              <li>The famous brand’s product is always #1 on Amazon.</li>
              <li>
                The client uses Profitero’s assortment and availability module,
                setting up alerts to monitor each time the famous brand’s
                product goes out of stock.
              </li>
              <li>
                When that happens, they sponsor all branded keywords around the
                famous product.
              </li>
              <li>They increase their sales by 7%!</li>
              <li>
                The client switches off the ad spend as soon as the famous
                brand’s product is back in stock.
              </li>
            </ul>

            <p>That’s just one example!</p>

            <p>
              Profitero customers typically experience 70% ecommerce sales
              acceleration over competitors.
            </p>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Profitero offers: </h3>
            <ul>
              <li>Powerful, yet affordable insights;</li>
              <li>
                Automation of research that normally takes a lot of your team’s
                time;
              </li>
              <li>
                Guidance, in partnership with e-Comas, to ensure the data is
                used.
              </li>
            </ul>

            <p>
              <strong>
                <em>
                  We can help you action the valuable data you get from
                  Profitero to optimise your content, improve your conversion
                  rates, save you time, and improve the ROI on your ad spend.
                </em>
              </strong>
            </p>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
