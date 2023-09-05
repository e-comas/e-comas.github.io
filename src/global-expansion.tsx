import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero from "./views/hero.tsx";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import WhatWeDo from "./views/what-we-do.tsx";
import Picture from "./utils/Picture.tsx";
import FlipCard from "./views/flipCard.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in">
      <h5 class="title">Global Expansion</h5>
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
      <figure id="made-easy">
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
        <Picture src="/images/PENCIL.jpg" alt="" />
      </figure>
      <WhatWeDo />
      </main>
      <section id="how-we-do-it">
        <h2>How We Do It</h2>
        <p>
          We combine strategic planning, data analysis and hands-on operational
          work to help brands break into new and growing markets.
        </p>
        <div role="list">
          <FlipCard
            title="Define Strategy"
            desc="We audit of your brand’s current eCommerce presence and work closely with you to set clear and measurable goals."
          />
          <FlipCard
            title="Manage Operations"
            desc="From optimising product listings to handling logistics and VAT, we can manage your account on multiple platforms."
          />
          <FlipCard
            title="Grow Traffic"
            desc="Whether it’s using Amazon PPC, DSP, Google or socials, we monitor and adjust your campaigns to maximise ROI."
          />
          <FlipCard
            title="Drive Conversion"
            desc="We use analytics tools to track key performance metrics, such as sales, traffic, conversion rates, and customer feedback."
          />
        </div>
      </section>
      <section id="see-the-results">
        <h2>See The Results</h2>
        <p>
          <EComas /> is proud to work with brilliant partners across the{" "}
          <ECommerce /> space, including
        </p>
        <figure>
          <Picture src={"/images/team-picture-EU.jpg"} alt={""} />
          <figcaption>
            <h3>Creating content for other countries</h3>
            <p>
              When expanding globally, the key to building trust in your brand
              is good-quality localised content. Download our success story to
              find out how we helped My Carry Potty grow its Amazon presence
              internationally.
            </p>
            <a class="cta" href="TODO">
              Download
              <FontAwesomeIcon icon={faDownload as IconProp} />
            </a>
          </figcaption>
        </figure>
      </section>
      <section id="blog">
        <h2>Blog</h2>
        <p>
          Find out useful eCommerce tips and what's new in the Amazon world
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
