import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import { EComas, ECommerce } from "./views/eWords.js";
import Footer from "./views/Footer.js";

import "./about-us.scss";

export default (
  <Body title="About eComas">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>How it started</h2>
      <Picture
        src="/images/jerome-thinking.png"
        alt="Jérôme with a thinking face"
      />
      <p>
        <EComas /> – <ECommerce /> Made Simple was founded by Jérôme de Guigné
        in 2013, with the simple idea of helping brands sell products online. We
        quickly realised companies were struggling with establishing profitable
        and sustainable <ECommerce /> strategies. That’s when ‘Amazon Made
        Simple’ was born, which later became ‘<ECommerce /> Made Simple’ –
        <EComas />.
      </p>

      <h2>How it's going</h2>
      <section>
        <Picture
          src="/images/team-picture-EU.jpg"
          alt="e-Comas Europe team picture"
        />
        <Picture
          src="/images/team-picture-IN.jpg"
          alt="e-Comas India team picture"
        />
      </section>
      <p>
        Today our experts coach brands and handle their accounts to sustainably
        grow their business and improve their agility in tackling everyday
        challenges with online retail. Working across Amazon, Shopify,
        CDiscount, Veepee, Bol, Walmart and more, we get you set up, we scale
        your business and make it profitable, handling your account, content and
        advertising.
        <br />
        Put simply, we help brands grow faster on <ECommerce /> – globally,
        quickly, across multiple online channels!
      </p>
      <a href="/our-team.html" className="cta">
        Meet our team
      </a>
      <a href="/testimonials.html" className="cta">
        Read our clients' testimonials
      </a>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
