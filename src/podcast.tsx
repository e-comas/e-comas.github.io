import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";

import "runtime:./utils/podcast_feeds.ts";
import Hero from "./views/hero.tsx";
import "./resources.scss";

export default (
  <Body title="Podcast">
    <Header />
    {/* <Breadcrumbs /> */}
      <Hero>
        <h1>Podcast</h1>
        <p>
          Listen to the <ECommerce /> Made Simple podcast with <EComas /> CEO
          Jérôme de Guigné and our expert friends to find out how to grow and
          succeed in eCommerce.
        </p>
      </Hero>
    <main id="main-content">

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
