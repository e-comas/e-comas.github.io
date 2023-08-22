import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero from "./views/hero.tsx";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import WhatWeDo from "./views/what-we-do.tsx";
import Picture from "./utils/Picture.tsx";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in">
      <h5 class="title">Grow your brand locally, faster</h5>
      <p>
        Wherever you are in the world, our experienced teams can help you reach
        the major markets across North and South America, Europe, the Middle
        East, and Asia.
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
      </a>
    </Hero>
    <figure class="made-easy">
      <figcaption>
        <h3>Global Growth Made Easy</h3>
        <p>
          Our international teams comprise ex-brand directors, ex-Amazonians and
          operational experts who have successfully built brands for over a
          decade on Amazon and beyond. We speak the local languages and have
          strong partnerships with key eCommerce players to drive your business
          forward on a global scale.
        </p>
        <p>
          From account management and strategy to advertising and localisation
          (plus everything in between!), we’ve got you covered. Sit back and
          relax with our hassle-free 360° turnkey solution.
        </p>
      </figcaption>
      <Picture src="/images/pencil.jpg" alt=""/>
    </figure>
    <WhatWeDo />

    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
