import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";

import "./news.scss";
import "runtime:./news-runtime.ts";
import Hero from "./views/hero.tsx";
import { ECommerce } from "./views/eWords.tsx";

export default (
  <Body title="Blog">
    <Header />
    {/* <Breadcrumbs /> */}
    <Hero>
      <h1>Blogs</h1>
      <p>
        We love to share our online retail expertise! Find out handy{" "}
        <ECommerce /> tips and what's new in the Amazon world through our blogs
        from the team.
      </p>
    </Hero>
    <main id="main-content">
      <h2>Our Blog</h2>
      <section>
        {"{% for post in site.posts %}"}
        {"{% unless post.tags contains 'Webinar' or post.sitemap == false %}"}
        <article>
          <a href="{{ post.url }}">
            <img
              src="{{ post.thumbnail }}"
              alt="{{ post.thumbnail_alt }}"
              loading="lazy"
            />
          </a>
          <time dateTime={"{{ post.date | date: '%Y-%m-%dT%H:%M:%S' }}"}>
            {'{{ post.date | date: "%b %d, %Y" }}'}
          </time>
          <h3>
            <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
          </h3>
          <ul class="tags">
            {"{% for tag in post.tags %}"}
            <li>{"{{ tag }}"}</li>
            {"{% endfor %}"}
          </ul>
          <p>
            <a href="{{ post.url }}">{"{{ post.excerpt | escape }}"}</a>
          </p>
          <a href="{{ post.url }}" class="cta">
            Read the article
          </a>
        </article>
        {"{% endunless %}"}
        {"{% endfor %}"}
      </section>
      <aside></aside>
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
