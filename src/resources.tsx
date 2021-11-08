import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import Partners from "./views/Partners.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import { ECommerce } from "./views/eWords.js";
import Picture from "./utils/Picture.js";

import "./classic-page.scss";

export default (
  <Body title="Resources">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/search.svg">
        <h2>Resources</h2>
        <p>
          We love to share our <ECommerce /> expertise! There are many ways you
          can learn from us.
        </p>
      </ElementWithIcon>

      <section>
        <figure>
          <figcaption>
            <h2>Read us</h2>
            <p>
              We love to share our online retail expertise. Find out useful
              <ECommerce /> tips and what's new in the Amazon world.
            </p>
            <a href="/news.html" class="cta">
              Check out our blog
            </a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>Learn from us</h2>
            <p>
              We run our own popular webinar programme, talking to our friends
              in the <ECommerce /> world about how brands can improve and grow.
              See our next events here!
            </p>
            <a href="/webinar.html" class="cta">
              Check out our webinars
            </a>
          </figcaption>
        </figure>
      </section>
      <section>
        <figure>
          <figcaption>
            <h2>Listen to us</h2>
            <p>
              Introducing the e-Comas podcast, now available on your favourite
              streaming service! Listen now to find out how to grow on Amazon
              and other <ECommerce /> platforms.
            </p>
            <a href="/webinar.html#podcast" class="cta">
              Check out our podcast
            </a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>White paper</h2>
            <p>
              We research hot topics in the <ECommerce /> industry and report
              our findings in our in-depth white papers. Learn more from us
              here!
            </p>
            <a href="/white-paper-form.html" class="cta">
              Check out our White Paper
            </a>
          </figcaption>
        </figure>
      </section>
      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>Hear more from us</h2>
            <p>
              Sign up to our newsletter and we'll send you regular updates on
              the world of Amazon, what's new in <ECommerce />, our upcoming
              webinars and more!
            </p>
            <a href="/white-paper-form.html" class="cta">
              Sign up for our newsletter
            </a>
          </figcaption>
        </figure>
      </section>
      <Partners />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
