import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import Picture from "./utils/Picture.js";

import "./classic-page.scss";

export default (
  <Body title="Webinar">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <figure>
          <figcaption>
            <h2>Next webinar</h2>
            <p>Lorem ipsum</p>
            <a class="cta">Register now</a>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h2>eComas as a podcast</h2>
            <p>Lorem ipsum</p>
            <a class="cta">Checkout on Apple Podcast</a>
            <a class="cta">Checkout on Spotify</a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
