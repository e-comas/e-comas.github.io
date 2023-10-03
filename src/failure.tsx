import { h, Fragment } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import { EComas } from "./views/eWords.tsx";

import "./success.scss";

export default (
  <Body>
    <Header />
    <main>
      <p>Error!</p>
      <p>We were unable to process your request.</p>
      <p>
        {" "}
        Sorry for the inconvenience. Please email{" "}
        <a href="mailto:contact@e-comas.com">contact@e-comas.com</a>
      </p>
      <a href="javascript:history.back()" class="cta">
        Go Back
      </a>
    </main>
  </Body>
).then((e) => document.body.append(e));
