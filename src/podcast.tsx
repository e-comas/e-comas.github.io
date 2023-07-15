import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";

import "runtime:./utils/podcast_feeds.ts";
import "./resources.scss";

export default (
  <Body title="Podcast">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>Listen to our podcast</h2>
      <p>
        Introducing the <EComas /> podcast, now available on your favourite
        streaming services! Listen now to find out how to grow on Amazon and
        other <ECommerce /> platforms.
      </p>

      <section id="podcast">
        <hr />
        <noscript>
          You need JavaScript enabled to pull the content for this page.
        </noscript>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
