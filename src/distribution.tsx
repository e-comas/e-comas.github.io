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
    <Hero class="animate-in long-page" entity={entityClasses.distribution}>
      <h1 class="title">Distribution</h1>
      <p>
        The missing link between brands and retailers.
      </p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          We extend the group’s offering by providing advanced logistics and
          fulfilment services that complement the Agency and Digital Marketing
          teams. We enable brands to work with a single, full-service partner
          for global, omni-channel distribution and business development.
        </p>
        <h3>What do we do for the external customer?</h3>
        <p>
          We provide flexible distribution models including 3PL, FBA, FBM, and
          DTC across e-commerce platforms and brick-and-mortar channels.
          Leveraging our operational and compliance expertise, we expand
          clients’ market reach, support sales and growth, strengthen retailer
          relationships, and track relevant KPIs. With facilities in the UK and
          mainland Europe (Luxembourg), we enable fast and reliable supply
          across wide geographies, supporting both B2B and B2C revenue growth.
        </p>
        <h3>What do we do for the internal customer?</h3>
        <p>
          We define and implement logistics processes to ensure smooth and
          reliable operations. We set detailed sales forecasts to support
          financial planning and assist sales teams in client engagement. We
          work closely with the Agency and Digital Marketing teams to deliver a
          consistent and integrated 360° offering across the group.
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
        {"{% for post in site.tags.Distribution | slice: 0, 3 %}"}
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
