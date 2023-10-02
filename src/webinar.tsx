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
import Hero from "./views/hero.tsx";
import { ECommerce } from "./views/eWords.tsx";

export default (
  <Body title="Webinar">
    <Header />
    <Hero>
      <h1> Webinar</h1>
      <p>
        We love talking to our friends and industry experts in the <ECommerce />
        world about how brands can improve and grow. From expanding into other
        markets to compliance and VAT, we cover it all with top tips you can
        learn from in our own popular webinar programme.
      </p>
      <p>See our previous events and register for our next webinar here!</p>
    </Hero>
    {/* <Breadcrumbs /> */}
    <main id="main-content" >
      <section id="upcoming" class="blog">
        {"{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}"}
        {"{% for webinar in site.tags.Webinar %}"}
        {"{% capture posttime %}{{webinar.date | date: '%s'}}{% endcapture %}"}
        {"{% if posttime >= nowunix %}"}
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
          <p>{"{{ webinar.excerpt | escape }}"}</p>
          <a href="{{ webinar.url }}" class="cta">
            Register now
          </a>
        </article>
        {"{% endif %}"}
        {"{% endfor %}"}
      </section>
      <section id="replays" class="blog">
        {"{% for webinar in site.tags.Webinar%}"}
        {"{% capture posttime %}{{webinar.date | date: '%s'}}{% endcapture %}"}
        {"{% if posttime < nowunix %}"}
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
          <p>{"{{ webinar.excerpt | escape }}"}</p>
          <a href="{{ webinar.url }}" class="cta">
            Watch now
          </a>
        </article>
        {"{% endif %}"}
        {"{% endfor %}"}
      </section>

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
