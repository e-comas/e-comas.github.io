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
    <Hero class="animate-in long-page" entity={entityClasses.marketplace}>
      <h1 class="title">Marketplace</h1>
      <p>
         eCommerce made simple
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
          We act as a strategic partner that makes e-commerce simple for brands.
          We support sustainable growth across platforms through clear strategy,
          market expansion support, and operational excellence, positioning
          ourselves as an end-to-end owner of clients’ e-commerce performance.
        </p>
        <h3>What do we do for the external customer?</h3>
        <p>
          We build and execute clear e-commerce growth strategies, including
          portfolio prioritisation, competitive analysis, and long-term
          roadmaps. We guide brands through market and platform expansion with
          local insights and regulatory support. We manage e-commerce operations
          end to end—from account setup and compliance to listings, content,
          advertising (PPC, DSP), AMC analysis, promotions, inventory
          management, and troubleshooting. We provide regular performance
          reviews to ensure transparency, alignment, and continuous improvement
          through clear recommendations and follow-up actions.
        </p>
        <h3>What do we do for the internal customer?</h3>
        <p>
          We strengthen the organisation by developing leadership, clarifying
          roles, and supporting managers to execute effectively. We design and
          document scalable processes, tools, and standards to enable consistent
          ways of working across teams. We support operational scaling by
          improving workflows, defining handovers, identifying bottlenecks, and
          driving automation. We ensure alignment and execution by helping teams
          work toward shared priorities through structured communication and
          consistent performance standards.
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
        {"{% for post in site.tags.Marketplace | slice: 0, 3 %}"}
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
