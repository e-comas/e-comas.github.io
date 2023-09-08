import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import { ECommerce } from "./views/eWords.tsx";

import webinars_playlists from "./utils/webinars.toml";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.ts";
import "./webinar.scss";

export default (
  <Body title="Webinar">
    <Header />
    <div class="hero">
      <h1>Case Studies</h1>
      <p>
        It worked for them! Download our case studies to learn all about how
        we've helped our valued clients boost their sales and grow their
        businesses globally.
      </p>
      <a href="TODO" class="cta">
        Register Now
      </a>
    </div>
    {/* <Breadcrumbs /> */}
    {/* TODO: find proper tags / proper content */}
    <main id="main-content">
      {"{% for case in site.tags.CaseStudies | slice: 0, 3 %}"}
      <article>
        <a href="{{ case.url }}">
          <img
            src="{{ case.thumbnail }}"
            alt="{{ case.thumbnail_alt }}"
            loading="lazy"
          />
        </a>
        <h3>
          <a href="{{ case.url }}">{"{{ case.title | escape }}"}</a>
        </h3>
        <time dateTime={"{{ case.date | date: '%Y-%m-%dT%H:%M:%S' }}"}>
          {'{{ case.date | date: "%b %d, %Y" }}'}
        </time>
        <p>{"{{ case.excerpt | escape }}"}</p>
        <a href="{{ case.url }}" class="cta">
          Register now
        </a>
      </article>
      {"{% endfor %}"}
    </main>
    <Footer />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);
