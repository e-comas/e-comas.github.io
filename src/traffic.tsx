import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";

import "./strategy.scss";

export default (
  <Body title="Traffic">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <p>TODO</p>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
