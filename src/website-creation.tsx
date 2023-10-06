import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero from "./views/hero.tsx";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import Picture from "./utils/Picture.tsx";
import FlipCard from "./views/flipCard.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faBullhorn,
  faDownload,
  faMagnifyingGlass,
  faPaintBrush,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import ListElement from "./views/ListElement.tsx";
import {
  ecPersonAndCog,
  ecGlobe,
  ecTrolley,
  ecData,
} from "./utils/customIconDefinition.ts";

import "./shopify.scss";

export default (
  <Body title="Website creation">
    <Header />
    {/* <Breadcrumbs /> */}
    <Hero class="animate-in">
      <h1 class="title">Website Creation</h1>
      <p>
        <EComas /> proudly partners with Shopify - the third largest online
        retailer behind Amazon and eBay in the US. Our experts can help you
        build and manage your Shopify store alongside your Amazon and other{" "}
        <ECommerce /> accounts to boost your sales and amplify your brand.
      </p>
      {/* TODO: maybe add this button to the template at this point */}
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <figure id="about" class="made-easy">
        <figcaption>
          <h3>About Shopify</h3>
          <p>
            We proudly partner with Shopify, the leading <ECommerce /> platform
            allowing brands to build and manage their own standalone online
            retail stores. Shopify is the third largest online retailer behind
            Amazon and eBay in the US, with 20% market share. We believe Shopify
            is one of the keys to a successful omni-channel online retail
            strategy. Running a Shopify store alongside your Amazon and other{" "}
            <ECommerce /> accounts can boost your sales and amplify your brand.
          </p>
        </figcaption>
        <Picture
          src="/images/shopify-laptop-at-small-meeting.jpg"
          alt="illustration"
        />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/Ecomma-b2.jpg"
        class="about-us"
      >
        <h3>How we can help</h3>
        <p>We have a team of Shopify experts including:</p>
        <div role="list">
          <ListElement
            icon={ecPersonAndCog as IconProp}
            title="UX designers"
            desc={""}
          />
          <ListElement
            icon={faPaintBrush as IconProp}
            title="Front end and back end designers"
            desc={""}
          />
          <ListElement
            icon={ecData as IconProp}
            title="A content team"
            desc={""}
          />
          <ListElement
            icon={ecTrolley as IconProp}
            title={
              <>
                <ECommerce /> consultants
              </>
            }
            desc={""}
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="An advertising team to generate traffic."
            desc={""}
          />
        </div>
        <a href="/contact.html" class="cta animatable no-arrow">
          Book a Call
          <FontAwesomeIcon icon={faPhone as IconProp} />
        </a>
      </ElementWithBackgroundImage>
    </main>
    <section class="how-we-do-it">
      <h2>What We’ll Do</h2>
      <p>
        Our strength is to support brands on their <ECommerce /> journey, on
        marketplaces and on their own eCommerce Shopify website.
      </p>
      <h4>Our processes will start with:</h4>
      <ol>
        <li>Au audit of your existing online presence.</li>
        <li>Support to design your eCommerce strategy.</li>
        <li>Briefing on your products and brand.</li>
        <li>Development of your Shopify Site.</li>
        <li>Daily Management of the site.</li>
      </ol>
    </section>
    <section id="roadmap" class="see-the-results">
      <h2>Our roadmap in three easy steps</h2>
      <div role="list">
        <figure>
          <img src="/images/icons/convert.svg" alt="" />
          <figcaption>Convert</figcaption>
        </figure>
        <figure>
          <img src="/images/icons/traffic.svg" alt="" />
          <figcaption>Traffic</figcaption>
        </figure>
        <figure>
          <img src="/images/icons/repeat.svg" alt="" />
          <figcaption>Repeat</figcaption>
        </figure>
      </div>
    </section>
    <Footer
      text={
        "Reach out to our team to find out how we can help you create your website to help you grow your brand faster."
      }
    />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
