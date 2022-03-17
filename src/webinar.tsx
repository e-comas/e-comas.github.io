import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.js";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import { ECommerce } from "./views/eWords.js";

import webinars_playlists from "./utils/webinars.toml";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.js";
import "./resources.scss";
import "./webinar.scss";

export default (
  <Body title="Webinar">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>Webinars</h2>
      {"{% if site.tags.Webinar.length != 0 %}"}
      <article>
        <a href="{{ site.tags.Webinar[0].url }}">
          <img
            src="{{ site.tags.Webinar[0].thumbnail }}"
            alt="{{ site.tags.Webinar[0].thumbnail_alt }}"
            loading="lazy"
          />
        </a>
        <time
          dateTime={
            '{{ site.tags.Webinar[0].date | date: "%Y-%m-%dT%H:%M:%S" }}'
          }
        >
          {'{{ site.tags.Webinar[0].date | date: "%b %d, %Y" }}'}
        </time>
        <h3>
          <a href="{{ site.tags.Webinar[0].url }}">
            {"{{ site.tags.Webinar[0].title | escape }}"}
          </a>
        </h3>
        <p>
          <a href="{{ site.tags.Webinar[0].url }}">
            {"{{ site.tags.Webinar[0].excerpt | escape }}"}
          </a>
        </p>
        <a href="{{ site.tags.Webinar[0].url }}" class="cta">
          Read the article
        </a>
      </article>
      {"{% endif %}"}
      <p>
        We run our own popular webinar programme, talking to our friends in the{" "}
        <ECommerce /> world about how brands can improve and grow. See our
        previous events here!
      </p>

      {webinars_playlists.map(({ title, playlist_id }) => (
        <section class="webinars">
          <h3>{title}</h3>
          <a
            href={`https://youtube.com/playlist?list=${playlist_id}`}
            data-embed-playlist={playlist_id}
            target="_blank"
            rel="noopener"
          >
            Watch the videos on YouTube
          </a>
        </section>
      ))}
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
