import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Advertising">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <figure>
          <figcaption>
            <h2>Advertising / Traffic</h2>
            <p>
              Once you've defined your <strong>strategy</strong>, streamlined
              your <strong>operations</strong> and created{" "}
              <strong>conversion</strong>
              -driving content, it's time for the fourth pillar of our eCommerce
              Growth Model: <strong>Traffic</strong>.<br />
              Publishing a listing on the marketplace is not a guarantee that
              consumers will see it. A great way to get the ball rolling is to
              advertise your listings and your brand - and our amazing team can
              help you find the easiest and most cost-effective ways of doing
              so.
              <br />
              We can build your advertising directly on the Amazon platform with
              Sponsored Ads (often called PPC, ‘pay per click’), the economic
              model for this type of advertising.
              <br />
              We can also push further with Amazon DSP - ‘Demand Side Platform’
              - which plugs into Amazon’s massive data in order to reach your
              target audiences wherever they are, inside and outside of the
              marketplace. <br />
              Our advertising team is also able to create and manage campaigns
              on other platforms such as Google and Facebook, to put your
              products in front of your audience and drive conversions either on
              Amazon or in your webshop, depending on your strategy and on the
              highest revenue potential. <br />
              e-Comas is an official Amazon Advertising partner and our team is
              composed of seasoned digital marketers with many years of
              experience and certifications to testify to their excellence:
            </p>
            <ul>
              <li>Amazon Sponsored Ads certifications;</li>
              <li>Amazon DSP certifications;</li>
              <li>Google Ads certifications;</li>
              <li>Facebook Blueprint certifications.</li>
            </ul>

            <p>
              We can help you establish an efficient advertising strategy on
              Amazon and holistically, and we can manage your campaigns via
              Amazon’s advertising offerings as well as Google Search, Facebook
              Ads, Instagram, Twitter, LinkedIn and more.
            </p>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

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
