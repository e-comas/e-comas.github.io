import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";

import "./privacy.scss";

export default (
  <Body>
    <Header />
    <main>
      <h2>Legal information</h2>
      <p>
        Legal name: e-Comas
        <br />
        Head office: 68 Avenue de la Liberté - L-1930 Luxembourg - LUXEMBOURG
        <br />
        Legal form:
        <br />
        Registered capital:
        <br />
        Founded on:
        <br />
        Registered in:
        <br />
        Tax identifier (intercommunity VAT number): LU 265 767 13
      </p>
      <p>
        For more information, contact the webmaster at:{" "}
        <a href="mailto:it@e-comas.com">it@e-comas.com</a>.
      </p>
    </main>
    <Footer />
  </Body>
).then((elem) => document.body.append(elem));
