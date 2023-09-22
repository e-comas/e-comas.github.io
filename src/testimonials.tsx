import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";
import Testimonies from "./views/Testimonies.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";

import "./testimonials.scss";

export default (
  <Body title="Testimonials">
    <Header />
{/* <Breadcrumbs /> */}
    <main id="main-content">
      <section id="testimonials">
        <h2>What our clients are saying</h2>
        <Testimonies />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
