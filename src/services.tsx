import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import FourStepApproach from "./views/FourStepApproach.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";

import "./services.scss";

export default (
  <Body title="Strategy">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/chess.svg">
        <h2>Services</h2>

        <p>Lorem ipsum intro text to services</p>
      </ElementWithIcon>

      <FourStepApproach />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
