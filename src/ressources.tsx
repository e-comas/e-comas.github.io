import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import Partners from "./views/Partners.js";
import Picture from "./utils/Picture.js";

import "./classic-page.scss";

export default (
  <Body title="Ressources">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <figure>
          <figcaption>
            <h2>Read us</h2>
            <p>Lorem ipsum</p>
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
            <p>Lorem ipsum</p>
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
            <p>Lorem ipsum</p>
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
            <p>Lorem ipsum</p>
            <a href="/white-paper-form.html" class="cta">
              Check out our White Paper
            </a>
          </figcaption>
        </figure>
      </section>
      <Partners />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
