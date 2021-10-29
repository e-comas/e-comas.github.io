import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import { ECommerce } from "./views/eWords.js";
import Picture from "./utils/Picture.js";

import "./classic-page.scss";

export default (
  <Body title="Webinar">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/chess.svg">
        <h2>Webinar</h2>
        <p>
          Get expert advice on managing and growing your Amazon business with
          our programme of <strong>free</strong> webinars!
        </p>
      </ElementWithIcon>
      {/* <section>
        <figure>
          <figcaption>
            <h2>Next webinar</h2>
            <p>Lorem ipsum</p>
            <a class="cta">Register now</a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section> */}
      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>Podcast</h2>
            <p>
              Commuting, at the gym, in the park? Get your Amazon expertise on
              the go!
              <br />
              Our <ECommerce /> Made Simple podcast is available wherever you
              get your podcasts.
            </p>
            <a
              class="cta"
              href="https://podcasts.apple.com/gb/podcast/ecommerce-made-simple-with-j%C3%A9r%C3%B4me-de-guign%C3%A9/id1573275810"
            >
              Checkout on Apple Podcasts
            </a>
            <a
              class="cta"
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2UxMWJhYy9wb2RjYXN0L3Jzcw=="
            >
              Checkout on Google Podcasts
            </a>
            <a
              class="cta"
              href="https://open.spotify.com/show/3ezO0U8wlLoV7bjIEvQCxw?si=5WBtMAq4QkmjojSDg0uhKA&dl_branch=1"
            >
              Checkout on Spotify
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
