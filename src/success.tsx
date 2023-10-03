import { h, Fragment } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import { EComas } from "./views/eWords.tsx";

import "./success.scss";

export default (
  <Body>
    <Header />
    <main>
      <p>Thank for getting in touch.</p>
      <p>
        The <EComas /> team will get back to you as soon as possible!
      </p>
      <a href="javascript:history.back()" class="cta">
        Go Back
      </a>
    </main>
  </Body>
).then((e) => document.body.append(e));
