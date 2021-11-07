import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.js";

import "./KeyFigures.scss";
import "runtime:./key-figures-animation.js";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="/images/Banner6 3x .png"
    class="key-figures"
  >
    <p>
      <strong data-count-to="25000">+25&nbsp;000</strong> listing managed
    </p>
    <p>
      <strong data-count-to="100">+100</strong> vendor &amp; seller accounts
      opened/managed
    </p>
    <p>
      <strong data-count-to="100000" data-currency="EUR">
        +100&nbsp;000&nbsp;€
      </strong>{" "}
      advertising campaigns handled
    </p>
  </ElementWithBackgroundImage>
);
