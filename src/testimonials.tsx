import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Testimonies from "./views/Testimonies.js";
import Breadcrumbs from "./views/Breadcrumbs.js";

import "./testimonials.scss";

export default (
  <Body title="The Testimonies">
    <Header />
    <Breadcrumbs />
    <main>
      <section id="testimonials">
        <h2>What our clients are saying</h2>
        <Testimonies />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
