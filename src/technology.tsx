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
    <Hero class="animate-in long-page" entity={entityClasses.technology}>
      <h1 class="title">Technology</h1>
      <p>
        Delivering value through technology.
      </p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <section id="what-we-do" class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          We deliver value through technology by turning complex, fragmented
          e-commerce data into clear, actionable intelligence. Our core product,
          Clarisix, shortens the distance between insight and decision-making by
          providing clarity across six critical performance dimensions: Sales,
          Advertising, Inventory, Profitability, Customer Experience, and
          Content/Merchandising. We also support growth-enabling technologies
          through implementation and managed services for tools such as Salsify
          and Inventory Planner.
        </p>
        <h3>What do we do for the external customer?</h3>
        <p>
          We unify and maintain reliable performance data by integrating key
          data sources into a single, accurate foundation. Through the Clarisix
          SaaS platform, we deliver best-in-class visualisation, proprietary
          metrics, and intuitive dashboards that enable faster, better
          decisions. We also enable operational excellence by implementing and
          managing PIM and forecasting tools that allow brands to scale their
          digital commerce operations effectively.
        </p>
        <h3>What do we do for the internal customer?</h3>
        <p>
          We ensure data quality and integrity across all client-facing outputs,
          resolving complex technical and data issues. We act as the internal
          technical authority by providing product and platform training to
          teams, supporting confident client decision-making. We drive
          innovation and scalability by managing deployment, maintenance, and
          growth of the group’s SaaS products and data infrastructure, while
          also supporting core group functions with technical expertise,
          planning, and implementation support.
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
        {"{% for post in site.tags.Technology | slice: 0, 3 %}"}
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
