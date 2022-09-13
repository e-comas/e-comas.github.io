import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import { ECommerce } from "./views/eWords.js";
import SlidingText from "./views/SlidingText.js";
import HoverableMenu from "./views/HoverableMenu.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";
import "./utils/cookie_consent.scss";
import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.js";

export default (
  <Body title="Content and Syndication">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>
        World class expertise to <strong>maximise</strong> your content!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We <strong>create</strong> outstanding content.
        </SlidingText>
        <SlidingText>
          We help you <strong>organise &amp; manage</strong> your content.
        </SlidingText>
        <SlidingText>
          We can <strong>globalise</strong> your listings.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Content Creation.png"
        >
          <h3>Content creation</h3>
          <p>Great content leads to great conversion, therefore great sales.</p>
          <p>
            <a href="#content_creation">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Content Management.png"
        >
          <h3>Content management</h3>
          <p>
            We take care of the complex process of content organisation and
            syndication.
          </p>
          <p>
            <a href="#content_management">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Content Localisation.png"
        >
          <h3>Content localisation</h3>
          <p>We help you to scale and expand your business internationally.</p>
          <p>
            <a href="#content_localisation">Read further</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <section id="content_creation">
        <figure>
          <Picture src="/images/Content Creation.png" alt="" />
          <figcaption>
            <h3>Content creation</h3>
            <p>
              Our team of content experts can help you define your needs and
              ensure you send customers to pages which really convert - with
              compelling content, relevant to your audience, that will turn into
              sales. We can support on:
            </p>
            <ul>
              <li>
                <strong>Copy</strong>: titles, bullet points, descriptions,
                below the fold content;
              </li>
              <li>
                <strong>Pictures</strong>: product simple pictures, in
                situation, in use, with graphic designs;
              </li>
              <li>
                <strong>Videos</strong>: user friendly videos displaying ranges
                or product benefits;
              </li>
              <li>
                <strong>A+ / below the fold</strong>: design and execution;
              </li>
              <li>
                <strong>Brand Stores</strong>: design, structure, content.
              </li>
            </ul>
            <a href="#" className="cta">
              Case study: Qhali Kay
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="content_management">
        <figure>
          <figcaption>
            <h3>Content management</h3>
            <p>
              We proudly partner with Salsify to help you with Product
              Information Management (PIM) &amp; Syndication, organising and
              uploading your content across multiple ecommerce platforms so you
              can <strong>win on the digital shelf</strong>.
            </p>
            <a class="cta" href="salsify.html">
              More about Salsify
            </a>
            <p>
              A PIM and syndication tool will solve the following challenges:
            </p>
            <ul>
              <li>
                <strong>One source of truth</strong>: have all your content in
                one place.
              </li>
              <li>
                <strong>Ensure scalability</strong> with one system handling all
                your copies in all languages.
              </li>
              <li>
                <strong>Save up to 50%</strong> on content upload with an
                automated system linked to all the major marketplaces in the
                world.
              </li>
            </ul>
            <a
              href="https://go.pardot.com/l/885733/2022-09-02/bwml5"
              target="_blank"
              className="cta open-in-modal"
            >
              Case study: Saving time through upload automation
            </a>
          </figcaption>
          <Picture src="/images/Content Management.png" alt="" />
        </figure>
      </section>

      <section id="content_localisation">
        <figure>
          <Picture src="/images/Content Localisation.png" alt="" />
          <figcaption>
            <h3>Content localisation</h3>
            <p>
              <ECommerce /> makes it easy to expand in the different countries
              in the world. However, customers of each country in the world
              still want to be addressed in their own language, with the local
              specificities. We therefore can help you with:
            </p>
            <ul>
              <li>
                <strong>Content translation</strong> by native speakers.
              </li>
              <li>
                <strong>SEO optimisation</strong> done locally - not translating
                keywords but researching the proper keywords.
              </li>
              <li>
                <strong>Support to upload</strong> to all the different
                platforms localised content in the world thanks to the use of
                Salsify.
              </li>
            </ul>
            <a href="#" className="cta">
              Case study: My Carry Potty
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
