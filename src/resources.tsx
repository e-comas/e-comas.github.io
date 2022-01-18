import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.js";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import { EComas, ECommerce } from "./views/eWords.js";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.js";
import "runtime:./utils/podcast_feed.js";
import "runtime:./utils/frame-auto-height.js";
import "./resources.scss";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";

const playlist_id = "PLIISXNQzZ8ZrvjOjGsK9iJykSn_x6xO3k";

export default (
  <Body title="Resources">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>Resources</h2>
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
          {"{% for post in site.posts limit:3 %}"}
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
        <h2>Podcast</h2>
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
          findings in our in-depth white papers. Learn more from us here!
        </p>
        <a href="/white-paper-form.html" className="cta">
          Check out our white papers
        </a>
      </ElementWithBackgroundImage>

      <section>
        <h3>Hear more from us</h3>
        <p>
          Sign up to our newsletter and we'll send you regular updates on the
          world of Amazon, what's new in <ECommerce />, our upcoming webinars
          and more!
        </p>
        <iframe
          src="//go.pardot.com/l/885733/2020-09-25/2wsd?Single_Opt_In=yes"
          width="100%"
          height="210"
        />
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
