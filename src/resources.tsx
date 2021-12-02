import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import { EComas, ECommerce } from "./views/eWords.js";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.js";
import "runtime:./utils/podcast_feed.js";
import "./resources.scss";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";

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

      {/* <section id="blog">
        <h3>Blog</h3>
        <p>
          We love to share our online retail expertise. Find out useful{" "}
          <ECommerce /> tips and what's new in the Amazon world.
        </p>
        {/* TODO: Load articles somehow *}
        <a href="/news.html" className="cta">
          Read our blog
        </a>
      </section> */}

      <section id="webinars">
        <h3>Webinars</h3>
        <p>
          We run our own popular webinar programme, talking to our friends in
          the <ECommerce /> world about how brands can improve and grow. See our
          next events here!
        </p>
        {/* TODO: Load videos somehow */}
        <a href="/webinars.html" className="cta">
          Check out our webinars
        </a>
      </section>

      <section id="podcast">
        <h2>Podcast</h2>
        <p>
          Introducing the <EComas /> podcast, now available on your favourite
          streaming service! Listen now to find out how to grow on Amazon and
          other <ECommerce /> platforms.
        </p>
        {/* TODO: Load podcasts somehow */}
        <a href="/podcasts.html" className="cta">
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
          src="https://go.pardot.com/l/885733/2020-09-25/2wsd"
          width="100%"
          height="294"
        />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
