import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import "./contact.scss";

export default (
  <Body title="White paper">
    <Header />
    <Breadcrumbs />
    <main>
      <iframe
        title="Contact us form"
        width="100%"
        height="1305"
        frameborder="0"
        allowtransparency
        loading="lazy"
        src="//go.pardot.com/l/885733/2020-11-09/4vbg"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
