import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import "./strategy.scss";

export default (
  <Body title="Traffic">
    <Header />
    <Breadcrumbs />
    <main>
      <p>TODO</p>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
