import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.js";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";

import "./news.scss";

export default (
  <Body title="Blog">
    <Header />
    <main>
      <h2>Our Blog</h2>
      {"{% for post in site.posts %}"}
      {"{% if post.sitemap != false %}"}
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
        <p>
          <a href="{{ post.url }}">{"{{ post.excerpt | escape }}"}</a>
        </p>
        <a href="{{ post.url }}" class="cta">
          Read the article
        </a>
      </article>
      {"{% endif %}"}
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
