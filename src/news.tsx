import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";

import "./contact.scss";

export default (
  <Body title="Blog">
    <Header />
    <main>
      <h2>Sign-up for news</h2>
      <iframe
        title="Sign-up for news form"
        loading="lazy"
        width="100%"
        height="619"
        frameborder="0"
        allowtransparency
        src="//go.pardot.com/l/885733/2020-09-25/2wsd"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
