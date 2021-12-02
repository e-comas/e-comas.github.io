import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import { ECommerce } from "./views/eWords.js";

import "./views/VideoEmbedLink.scss";
import "runtime:./utils/youtube_feed.js";
import "./resources.scss";

export default (
  <Body title="Webinar">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>Webinars</h2>
      <p>
        We run our own popular webinar programme, talking to our friends in the{" "}
        <ECommerce />
        world about how brands can improve and grow. See our next events here!
      </p>

      <section id="webinars">
        <hr />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
