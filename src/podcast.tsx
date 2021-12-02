import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import { EComas, ECommerce } from "./views/eWords.js";

import "runtime:./utils/podcast_feed.js";
import "./resources.scss";

export default (
  <Body title="Podcast">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>Listen to our podcast</h2>
      <p>
        Introducing the <EComas /> podcast, now available on your favourite
        streaming services! Listen now to find out how to grow on Amazon and
        other <ECommerce /> platforms.
      </p>

      <section id="podcast">
        <hr />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
