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
import Blog from "./_layouts/blog.tsx";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in">
      <h5 class="title">Grow your brand locally, faster</h5>
      <p>
        Wherever you are in the world, our experienced teams can help you reach
        the major markets across North and South America, Europe, the Middle
        East, and Asia.
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
            Our international teams comprise ex-brand directors, ex-Amazonians
            and operational experts who have successfully built brands for over
            a decade on Amazon and beyond. We speak the local languages and have
            strong partnerships with key eCommerce players to drive your
            business forward on a global scale.
          </p>
          <p>
            From account management and strategy to advertising and localisation
            (plus everything in between!), we’ve got you covered. Sit back and
            relax with our hassle-free 360° turnkey solution.
          </p>
        </figcaption>
        <Picture src="/images/PENCIL.jpg" alt="" />
      </figure>
      <WhatWeDo />
      <section id="how-we-do-it">
        <h2>How We Do It</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
          eget erat lacinia pretium
        </p>
        <div role="list">
          <FlipCard
            title="Define Startegy"
            number={1}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
        eget erat lacinia pretium"
          />
          <FlipCard
            title="Manage Operations"
            number={2}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
        eget erat lacinia pretium"
          />
          <FlipCard
            title="Grow Traffic"
            number={3}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
        eget erat lacinia pretium"
          />
          <FlipCard
            title="Drive Conversion"
            number={4}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
        eget erat lacinia pretium"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna
          eget erat lacinia pretium.
        </p>
        {"{% for post in site.tags.TODO | slice: 0, 3 %}"}
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
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
