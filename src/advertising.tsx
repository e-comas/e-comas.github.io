import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Advertising">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/search.svg">
        <h2>Advertising / Traffic</h2>
        <p>
          The quickest way to grow on Amazon and other ecommerce platforms is to
          advertise – and our amazing team can help you find the easiest and
          most cost-effective ways of doing so.
        </p>
        <p>We can:</p>
        <ul>
          <li>
            Build your advertising directly on Amazon with Sponsored Ads (or
            PPC, ‘pay per click’).
          </li>
          <li>
            Push further with Amazon DSP (‘Demand Side Platform’), using
            Amazon’s wider offering.
          </li>
          <li>
            Create and manage campaigns on Google, Facebook and more to drive
            conversions on Amazon and in your webshop.
          </li>
        </ul>

        <p>
          e-Comas is an official Amazon Advertising partner and our team is
          composed of seasoned digital marketers with many years of experience.
          We have <strong>certifications</strong> in:
        </p>
        <ul>
          <li>Amazon Sponsored Ads;</li>
          <li>Amazon DSP;</li>
          <li>Google Ads;</li>
          <li>Facebook Blueprint.</li>
        </ul>
      </ElementWithIcon>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Advertising management</h3>
            <p>
              Accelerate your ecommerce growth with us!
              <br />
              Our team can help you drive your sales and brand awareness with
              our advertising management services. They include:
            </p>
            <ul>
              <li>Definition of your targets and KPIs;</li>
              <li>Channel strategy;</li>
              <li>Keyword research;</li>
              <li>Audience definition;</li>
              <li>Creative assets;</li>
              <li>Campaign set-up;</li>
              <li>Ongoing goal-driven optmisation;</li>
              <li>Reporting on KPIs.</li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Retail media</h3>
            <p>
              Advertising directly on Amazon and other ecommerce platforms can
              have great results in getting more people to see your products,
              building your brand and shining among your competitors.
              <br />
              Amazon has several of its own advertising options, including:
            </p>
            <ul>
              <li>Amazon DSP;</li>
              <li>Sponsored Brands;</li>
              <li>Sponsored Products;</li>
              <li>Video ads;</li>
              <li>Stores.</li>
            </ul>
            <p>
              The e-Comas team has expert knowledge and experience with all of
              them!
            </p>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Digital advertising</h3>
            <p>
              Advertising <strong>off</strong> Amazon to drive external traffic
              from platforms such as Facebook, Google, Instagram, Tik Tok opens
              another world of opportunity to target new prospects as well as
              reconnect with old customers.
              <br />
              We can help you harness the power of search engines and social
              media sites to put your products in front of the people most
              likely to buy them, as well as building click-through traffic to
              boost your rankings. <br />
              They include:
            </p>
            <ul>
              <li>Google,</li>
              <li>Facebook ,</li>
              <li>Instagram,</li>
              <li>Twitter,</li>
              <li>LinkedIn,</li>
              <li>Bing,</li>
              <li>and more!</li>
            </ul>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
