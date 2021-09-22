import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import "./contact.scss";

export default (
  <Body title="Contact us">
    <Header />
    <Breadcrumbs />
    <main>
      <iframe
        title="Contact us form"
        width="100%"
        height="1305"
        frameborder="0"
        allowtransparency="true"
        data-src="//go.pardot.com/l/885733/2020-09-10/25cw"
        src="//go.pardot.com/l/885733/2020-09-10/25cw"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
