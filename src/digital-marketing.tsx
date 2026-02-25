import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero, { entityClasses } from "./views/hero.tsx";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faBullhorn,
  faDownload,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";


export default (
  <Body title="Global Expansion">
    <Header />
    <Hero
      class="animate-in long-page"
      entity={entityClasses["digital Marketing"]}
    >
      <h1 class="title">Digital Marketing</h1>
      <p>Building coherent digital ecosystems for e-commerce brands.</p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          We design and activate coherent digital ecosystems that help
          e-commerce brands grow consistently across markets. We connect social
          media, websites, online advertising, and content into a single,
          unified brand and performance strategy.
        </p>
        <p>
          We work holistically, not in silos—combining strategic thinking with
          hands-on execution to turn complex digital environments into
          structured, scalable growth engines. Our international team advises
          brands on how to structure, prioritise, and scale their digital
          presence while ensuring consistency, efficiency, and long-term
          performance across channels and geographies.
        </p>
        <h3>What do we do for the external customer?</h3>
        <p>
          We help e-commerce brands clarify, structure, and accelerate their
          digital growth. Acting as a trusted partner, we provide both strategic
          direction and operational execution across the full digital ecosystem.
          From defining the right channel mix and content strategy to activating
          campaigns and digital experiences, we ensure all efforts work together
          to strengthen brand identity, increase visibility, and drive
          measurable growth.
        </p>
        <h3>What do we do for the internal customer?</h3>
        <p>
          We support the group by guiding clear decision-making across social
          media, websites, online advertising, and content. We ensure all
          digital touchpoints align with shared growth objectives and broader
          commercial strategies. Our teams translate complexity into clear,
          actionable plans, adapt strategies to local market needs, and execute
          with speed and consistency—enabling other BUs to operate with focus,
          alignment, and confidence.
        </p>
      </section>
    </main>
    <section id="blog" class="blog">
      <h2>Our blog</h2>
      <p>
        Read our latest blogs for helpful <ECommerce /> tips and what's new in
        the Amazon world relating to expanding your brand internationally.
      </p>
      <div role="list">
        {"{% for post in site.tags.Digital_Marketing | slice: 0, 3 %}"}
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
