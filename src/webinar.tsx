import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
// import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
// import { ECommerce } from "./views/eWords.tsx";

// import webinars_playlists from "./utils/webinars.toml";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.ts";
import "./webinar.scss";

export default (
  <Body title="Webinar">
    <Header />
    <div class="hero">
      <h1> Webinar</h1>
      <p>
        We run our own popular webinar programme, talking to our friends in the
        eCommerce world about how brands can improve and grow. See our next
        events here!
      </p>
      <a href="TODO" class="cta">
        Register Now
      </a>
    </div>
    {/* <Breadcrumbs /> */}
    <main id="main-content">
      {"{% for webinar in site.tags.Webinar | slice: 0, 3 %}"}
      <article>
        <a href="{{ webinar.url }}">
          <img
            src="{{ webinar.thumbnail }}"
            alt="{{ webinar.thumbnail_alt }}"
            loading="lazy"
          />
        </a>
        <h3>
          <a href="{{ webinar.url }}">{"{{ webinar.title | escape }}"}</a>
        </h3>
        <time dateTime={"{{ webinar.date | date: '%Y-%m-%dT%H:%M:%S' }}"}>
          {'{{ webinar.date | date: "%b %d, %Y" }}'}
        </time>
        <p>{"{{ webinar.excerpt | escape }}"}</p>
        <a href="{{ webinar.url }}" class="cta">
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
