import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Content and Syndication">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/directions.svg">
        <h2>Content</h2>
        <p>
          Great content leads to great conversion.
          <br />
          We know exactly what kind of listings content you need to persuade
          shoppers on Amazon and other platforms to click 'buy' on your
          products.
          <br />
          Our amazing team can help you create, upload and manage content that
          shows off your products, and therefore drives up your conversion rate.
        </p>
      </ElementWithIcon>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>PIM and Syndication</h3>
            <p>
              We proudly partner with Salsify to help you with Product
              Information Management (PIM), organising and uploading your
              content across multiple ecommerce platforms so you can{" "}
              <strong>win on the digital shelf.</strong>
            </p>
            <a class="cta" href="salsify.html">
              More about Salsify
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="salsify">
        <figure>
          <figcaption>
            <h3>Content creation</h3>
            <p>We can help you with:</p>
            <ul>
              <li>
                <strong>Copywriting</strong>: your listings' titles, bullet
                points, long descriptions, and A+/EBC content text.
              </li>
              <li>
                <strong>Keywords</strong>: the best keywords to ensure your
                listings have great SEO (search engine optimisation).
              </li>
              <li>
                <strong>Images</strong>: a good number of high quality pictures
                of your products (with white background or in context), and
                graphic designs.
              </li>
              <li>
                <strong>Videos</strong> of your products in action and 360°
                pictures.
              </li>
            </ul>
            <a href="white-paper.html" className="cta">
              Download our case studies
            </a>
          </figcaption>
          <img src="/images/ECOM_SCHEMA_1.svg" alt="Grow in retail" />
          <img src="/images/ECOM_SCHEMA_2.svg" alt="Grow in retail" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
