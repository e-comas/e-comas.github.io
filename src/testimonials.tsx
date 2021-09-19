import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";

import "./testimonials.scss";

export default (
  <Body>
    <Header />
    <main>
      <p>TODO</p>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
