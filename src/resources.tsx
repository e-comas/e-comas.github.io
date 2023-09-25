import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.ts";
import "runtime:./utils/podcast_feed.ts";
import "runtime:./utils/frame-auto-height.ts";
import "./resources.scss";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import Newsletter from "./views/newsletter.tsx";

const playlist_id = "PLIISXNQzZ8ZrvjOjGsK9iJykSn_x6xO3k";

export default (
  <Body title="Resources">
    <Header />
    {/* <Breadcrumbs /> */}
    <main id="main-content">
      <h2>Resources</h2>
      {/* Check the spacing here and make h3s as big as h2 */}
      <p>
        Learn from our amazing team of <ECommerce /> experts in whatever way
        suits you - we’ve got {/*blogs, */}webinars, podcasts, white papers, and
        more!
      </p>

      <section id="blog">
        <h3>Blog</h3>
        <p>
          We love to share our online retail expertise. Find out useful{" "}
          <ECommerce /> tips and what's new in the Amazon world.
        </p>
        <div class="blog-articles">
          {"{% assign counter = 0 -%}"}
          {"{% for post in site.posts -%}"}
          {"{% unless post.tags contains 'Webinar' %}"}
          {"{% assign counter = counter | plus: 1 -%}"}
          {"{% if post.sitemap != false %}"}
          <article>
            <a href="{{ post.url }}">
              <img src="{{ post.thumbnail }}" alt="{{ post.thumbnail_alt }}" />
            </a>
            <h4>
              <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
            </h4>
            <p>
              <a href="{{ post.url }}">{"{{ post.excerpt | markdownify }}"}</a>
            </p>
          </article>
          {"{% endif %}"}
          {"{% if counter == 3 %}{% break %}{% endif -%}"}
          {"{% endunless %}"}
          {"{% endfor %}"}
        </div>
        <a href="/news.html" className="cta">
          Read our blog
        </a>
      </section>

      <section id="webinars" class="webinars">
        <h3>Webinars</h3>
        <p>
          We run our own popular webinar programme, talking to our friends in
          the <ECommerce /> world about how brands can improve and grow. See our
          next events here!
        </p>
        <span data-embed-playlist={playlist_id} hidden />
        <a href="/webinar.html" className="cta">
          Check out our webinars
        </a>
      </section>

      <section id="podcast" class="podcast">
        <h3>Podcast</h3>
        <p>
          Introducing the <EComas /> podcast, now available on your favourite
          streaming service! Listen now to find out how to grow on Amazon and
          other <ECommerce /> platforms.
        </p>
        <a href="/podcast.html" className="cta">
          Listen to our podcast
        </a>
      </section>

      <ElementWithBackgroundImage
        src="/images/white-paper-bg.png"
        tagName="section"
      >
        <h3>White papers</h3>
        <p>
          We research hot topics in the <ECommerce /> industry and report our
          findings in our in&#8209;depth white papers. Learn more from us here!
        </p>
        <a href="/white-paper-form.html" className="cta">
          Check out our white papers
        </a>
      </ElementWithBackgroundImage>

      <ElementWithBackgroundImage
        src="/images/case-studies/index.png"
        tagName="section"
      >
        <h3>Case studies</h3>
        <p>
          It worked for them! Learn about how we've helped our clients boost
          their sales and grow their business globally.
        </p>
        <a href="/case-studies.html" className="cta">
          Read our case studies
        </a>
      </ElementWithBackgroundImage>

      <Newsletter />
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
