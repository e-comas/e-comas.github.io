import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

export default (
  <Body title="Partners">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Our partners</h2>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
