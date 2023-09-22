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
} from "./utils/customIconDefinition.ts";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in long-page">
      <h1 class="title">Global Expansion</h1>
      <p>
        Break into new markets and unlock more global sales with a clear
        strategy and our international team of <ECommerce /> experts guiding you
        every step of the way.
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>

    <main id="main-content">
      <figure id="made-easy" class="made-easy">
        <figcaption>
          <h3>Global Growth Made Easy</h3>
          <p>
            <EComas /> helps brands expand globally, faster. Wherever you are in
            the world, we can help you reach the major markets across North and
            South America, Europe, the Middle East, and Asia. We specialise in
            helping ambitious brands like yours grow on Amazon and other online
            marketplaces worldwide.
          </p>
          <h4>How do we make it happen?</h4>
          <p>
            Our international teams comprise ex-brand directors, ex-Amazonians
            and operational experts who have successfully built brands for over
            a decade on Amazon and beyond. We speak the local languages and have
            strong partnerships with key <ECommerce /> players to drive your
            business forward on a global scale.
          </p>
        </figcaption>
        <Picture src="/images/discussion.jpg" alt="" />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/Ecomma-b2.jpg"
        class="about-us"
      >
        <h3>Our Expertise</h3>
        <p>
          From handling logistics and taxes to product translation and
          localizations, we've got you covered. Sit back and relax with our
          hassle-free full service solution.
        </p>
        <div role="list">
          <ListElement
            title="Strategy & Planning"
            desc={
              <>
                Learn what it takes to be successful on Amazon and in{" "}
                <ECommerce />. Once you’re up to speed, our experts help you
                define the best growth strategy for your brands and market.
              </>
            }
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="EU Expansion"
            desc="Don’t miss out on the huge opportunity that is Europe. Split into multiple countries, you’ll have to conquer them one by one but don’t worry; our native speakers will get you ready in no time."
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="US Expansion"
            desc="The US is Amazon’s home base, which means the largest market to sell in. We’ve helped many brands expand from Europe or Asia to the US; let us help you thrive in this key market."
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="Asia Expansion"
            desc={
              <>
                The Asian <ECommerce /> market is massive, but with our local
                teams on hand, we can help you navigate these complex
                marketplaces and expand on Amazon in India, Singapore and Japan.
              </>
            }
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="RoW Expansion"
            desc="Want to expand in South America, South Africa or Australia? We work closely with trusted local partners that can help you reach and succeed in each corner of the world."
          />
          <ListElement
            icon={ecPersonAndCog as IconProp}
            title="Account Management"
            desc={
              <>
                We can manage the day-to-day aspects of your <ECommerce />{" "}
                account. From cataloguing to handling your retail media
                campaigns and analytics reporting, we’ve got you covered.
              </>
            }
          />
          <ListElement
            icon={ecTrolley as IconProp}
            title="Retail"
            desc="Use our Seller account and team of experts to import and sell your products in your name. The best part? We’ll take care of taxes and all the management of the account."
          />
          <ListElement
            icon={faBullhorn as IconProp}
            title="Retail Media"
            desc="Let us handle your social media, search engine and marketplace advertising. We can also give you access to AMC (Amazon Marketing Cloud) and Amazon Marketing Stream to help you grow faster."
          />
          <ListElement
            icon={faMagnifyingGlass as IconProp}
            title="Technology & Analytics"
            desc="Our multilingual team can target your strategy to drive sales in new markets and engage online shoppers worldwide with their knowledge of the nuances of different countries, languages and cultures."
          />
        </div>
        <a href="/contact.html" class="cta animatable">
          Book a Call
        </a>
      </ElementWithBackgroundImage>
    </main>
    <section id="how-we-do-it" class="how-we-do-it">
      <h2>How We Do It</h2>
      <p>
        We combine strategic planning, data analysis and hands-on operational
        work to help brands break into new and growing markets.
      </p>
      <div role="list">
        <FlipCard
          title="Define Strategy"
          desc={
            <>
              We audit of your brand’s current <ECommerce /> presence and work
              closely with you to set clear and measurable goals."
            </>
          }
        />
        <FlipCard
          title="Manage Operations"
          desc="From optimizing product listings to handling logistics and VAT, we can manage your account on multiple platforms."
        />
        <FlipCard
          title="Grow Traffic"
          desc="Whether it’s using Amazon PPC, DSP, Google or socials, we monitor and adjust your campaigns to maximize ROI."
        />
        <FlipCard
          title="Drive Conversion"
          desc="We use analytics tools to track key performance metrics, such as sales, traffic, conversion rates, and customer feedback."
        />
      </div>
    </section>
    <section id="see-the-results" class="see-the-results">
      <h2>See The Results</h2>
      <p>
        Don’t take our word for it – find out how we helped a British brand
        launch in all the European marketplaces and the USA.
      </p>
      <figure>
        <Picture src={"/images/case-studies/mycarrypotty.png"} alt={""} />
        <figcaption>
          <h3>Creating content for other countries</h3>
          <p>
            When expanding globally, the key to building trust in your brand is
            good-quality localized content. Download our success story to find
            out how we helped My Carry Potty grow its Amazon presence
            internationally.
          </p>
          <a class="cta" href="https://go.e-comas.com/l/885733/2023-01-16/l813c">
            Download
            <FontAwesomeIcon icon={faDownload as IconProp} />
          </a>
        </figcaption>
      </figure>
    </section>
    <section id="blog" class="blog">
      <h2>Blog</h2>
      <p>
        Find out useful <ECommerce /> tips and what's new in the Amazon world
        relating to global expansion.
      </p>
      <div role="list">
        {"{% for post in site.tags.Expansion | slice: 0, 3 %}"}
        <article>
          <a href="{{ post.url }}">
            <img
              src="{{ post.thumbnail }}"
              alt="{{ post.thumbnail_alt }}"
              loading="lazy"
            />
          </a>
          <h3>
            <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
          </h3>
          <p>{"{{ post.excerpt | escape }}"}</p>
          <a href="{{ post.url }}" class="cta">
            Read More
          </a>
        </article>
        {"{% endfor %}"}
      </div>
    </section>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
