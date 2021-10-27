import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import SlidingText from "./views/SlidingText.js";
import HoverableMenu from "./views/HoverableMenu.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import ECommerce from "./views/eCommerce.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Advertising">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise to <strong>boost</strong> your <ECommerce /> with
        advertising!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We handle your Retail Media <strong>advertising</strong>.
        </SlidingText>
        <SlidingText>
          We manage your <strong>social media</strong> advertising.
        </SlidingText>
        <SlidingText>
          We help your <strong>community management</strong>.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting01.png"
        >
          <h3>Retail media advertising</h3>
          <p>Boost your sales and control ROI with PPC and DSP campaigns.</p>
          <p>
            <a href="#retail_media">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting01.png"
        >
          <h3>Social media advertising</h3>
          <p>
            Advertising off market places is ideal to boost sales and brand
            awareness.
          </p>
          <p>
            <a href="#social_media">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting01.png"
        >
          <h3>Community management</h3>
          <p>
            We support to grow a strong brand awareness to drive successful
            sales.
          </p>
          <p>
            <a href="#community_management">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <section id="retail_media">
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Retail media advertising</h3>
            <p>
              Our team of Advertising experts will help you grow your sales
              exponentially with:
            </p>
            <ul>
              <li>
                Targeted and efficient <strong>Amazon advertising</strong>{" "}
                campaigns such as Sponsored Ads and PPC, ‘pay per click’.
              </li>
              <li>
                Push further with <strong>Amazon DSP</strong> (‘Demand Side
                Platform’), to grow your customer funnel from outside of Amazon.
              </li>
              <li>
                Create and manage campaigns on <strong>Google</strong>,{" "}
                <strong>Facebook</strong> and <strong>more</strong> to drive
                conversions on Amazon and in your webshop.
              </li>
            </ul>
            <p>
              e-Comas is an official Amazon Advertising partner and our team is
              composed of seasoned digital marketers with many years of
              experience.
            </p>

            <a href="#" className="cta">
              Case study: Zero Water
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="social_media">
        <figure>
          <figcaption>
            <h3>Retail media advertising</h3>
            <p>
              Advertising off Amazon to drive external traffic from platforms
              such as Facebook, Google, Instagram, Tik Tok opens another world
              of opportunity to target new prospects as well as reconnect with
              old customers.
            </p>
            <p>
              We can help you harness the power of search engines and social
              media sites to put your products in front of the people most
              likely to buy them, as well as building click-through traffic to
              boost your rankings.
              <br />
              They include:
            </p>
            <ul>
              <li>Google,</li>
              <li>Facebook,</li>
              <li>Instagram,</li>
              <li>Twitter,</li>
              <li>LinkedIn,</li>
              <li>Bing,</li>
              <li>and more!</li>
            </ul>

            <a href="#" className="cta">
              Case study: MIAMILY
            </a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section id="community_management">
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Digital advertising</h3>
            <p>
              sBrand building and high funnel approaches use community
              management to target customers at the very early stages of
              engagement, to get traction, and brand awareness which will be
              crucial for the lower parts of the funnel, as time goes on. The
              service focuses on:
            </p>
            <ul>
              <li>
                Local / native speakers to engage with audience in North
                America, Europe and India;
              </li>
              <li>
                Content creation and syndication on all social media platforms
                (Facebook, IG, TikTok...);
              </li>
              <li>
                Link with your <ECommerce /> activities to maximise brand
                awareness.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Qhali Kay
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
