import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero from "./views/hero.tsx";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import Picture from "./utils/Picture.tsx";
import FlipCard from "./views/flipCard.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faBullhorn,
  faCogs,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import ListElement from "./views/ListElement.tsx";
import {
  ecGlobe,
} from "./utils/customIconDefinition.ts";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in long-page">
      <h1 class="title">Walmart Marketplace</h1>
      <p>
        Ready to take your brand to the next level on Walmart Marketplace? Our
        awesome team of eCommerce experts is here to make it happen! We've got
        the knowledge, experience and resources to handle everything from your
        product listings to inventory management and customer support to help
        you thrive.
      </p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>

    <main id="main-content">
      <figure id="made-easy" class="made-easy">
        <figcaption>
          <h3>Your Walmart Journey Begins Here</h3>
          <p>
            Walmart, the retail giant that caters to over{" "}
            <a href="https://bloggingwizard.com/walmart-statistics/">
              240 million customers weekly
            </a>
            , is where you want to be. And we're here to guide you on this
            exciting journey. By leveraging our expertise, you can focus on your
            core business activities while benefiting from specialised support
            in navigating the complexities of the marketplace.
          </p>
          <h4>Succeed on Walmart with Our Expertise</h4>
          <p>
            Our international team is made up of ex-brand directors and
            operational experts who’ve been helping ambitious brands and sellers
            like you thrive on major eCommerce platforms for over a decade. Our
            insider knowledge of Walmart's best practices, combined with proven
            strategies and cutting-edge technology, makes us your go-to partner
            for success.
          </p>
          <p>
            Trust us to seamlessly manage your brand and partner with us to
            boost visibility, drive sales and foster some serious growth on
            Walmart. Let's make it happen together!
          </p>
        </figcaption>
        <Picture src="/images/Walmart.jpg" alt="" />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/Ecomma-b2.jpg"
        class="about-us"
      >
        <h3>Our Expertise</h3>
        <p>
          With our exceptional track record of increasing client revenues,
          e-Comas is your full service eCommerce agency that will take your
          brand to new heights. We offer all the services you need to overcome
          any challenges that come with selling on Walmart Marketplace.
        </p>
        <div role="list">
          <ListElement
            title="Strategy & Planning"
            desc={
              <>
                Learn what it takes to be successful on Walmart and in{" "}
                <ECommerce />. Once you’re up to speed, our experts will help
                you define the best growth strategy tailored to your brand.
              </>
            }
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="Market & Competitor Analysis"
            desc="We’ll conduct a thorough examination of the market landscape and a detailed assessment of your competitors, including trends, product analysis and performance metrics."
          />
          <ListElement
            icon={faCogs as IconProp}
            title="Walmart Store Setup"
            desc="Get our expert help navigating the onboarding process, which involves setting up a Walmart account, providing necessary documentation and configuring product listings."
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="SEO & Branding"
            desc="Our team can assist you in creating and optimising product listings - including product titles, descriptions and images - to meet Walmart's standards and enhance visibility."
          />
          <ListElement
            icon={faBullhorn as IconProp}
            title="Retail Media"
            desc="Increase the visibility of your products on Walmart Marketplace with winning marketing and paid advertising strategies like Walmart Sponsored Products Ad campaigns."
          />
          <ListElement
            icon={faMagnifyingGlass as IconProp}
            title="Monitoring & Reporting"
            desc="We’ll regularly monitor and analyse sales performance, customer feedback and other relevant metrics to identify areas for improvement and optimise performance."
          />
        </div>
        <a href="/contact.html" class="cta animatable no-arrow">
          Book a Call
          <FontAwesomeIcon icon={faPhone as IconProp} />
        </a>
      </ElementWithBackgroundImage>
    </main>
    <section id="how-we-do-it" class="how-we-do-it">
      <h2>Why Sell On Walmart Marketplace?</h2>
      <p>
        Selling on Walmart comes with a bunch of benefits, especially if you
        want to expand your online presence and reach a broader customer base.
        Here are some reasons why you should sell on Walmart Marketplace:
      </p>
      <div role="list">
        <FlipCard
          title="Huge Audience"
          desc="Walmart is one of the largest retail chains globally, and its online marketplace provides access to a vast customer base for you to tap into"
        />
        <FlipCard
          title="Increase Credibility"
          desc="Associating your brand with Walmart can enhance your credibility and trustworthiness with consumers since it’s a well-known, trusted brand."
        />
        <FlipCard
          title="Competitive Fees"
          desc="Benefit from competitive and transparent pricing structures and potentially lower fees, which can help you increase profitability."
        />
        <FlipCard
          title="Global Reach"
          desc="Walmart has a significant presence not only in the US but also in other countries. So you can access international customers."
        />
      </div>
    </section>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
