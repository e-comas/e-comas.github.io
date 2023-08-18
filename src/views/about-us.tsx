import { h } from "@aduh95/async-jsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { EComas } from "../views/eWords.tsx";

import "./about-us.scss";
import "runtime:./about-us-runtime.ts";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.tsx";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="images/team/Ecomma-b2.jpg"
    class="about-us"
  >
    <h2>About us</h2>
    <h3>
      Why <EComas />?
    </h3>
    <div role="list">
      <section role="listitem" class="animatable">
        <FontAwesomeIcon size="3x" icon={faChess as IconProp} />
        <h4>Benefit</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure
          assumenda eius repudiandae reprehenderit sequi minus, blanditiis,
          possimus distinctio et sint, numquam corporis obcaecati dicta deleniti
          explicabo. Et, voluptates. Dolorem.
        </p>
      </section>
      <section role="listitem" class="animatable">
        <FontAwesomeIcon size="3x" icon={faChess as IconProp} />
        <h4>Benefit</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure
          assumenda eius repudiandae reprehenderit sequi minus, blanditiis,
          possimus distinctio et sint, numquam corporis obcaecati dicta deleniti
          explicabo. Et, voluptates. Dolorem.
        </p>
      </section>
      <section role="listitem" class="animatable">
        <FontAwesomeIcon size="3x" icon={faChess as IconProp} />
        <h4>Benefit</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure
          assumenda eius repudiandae reprehenderit sequi minus, blanditiis,
          possimus distinctio et sint, numquam corporis obcaecati dicta deleniti
          explicabo. Et, voluptates. Dolorem.
        </p>
      </section>
    </div>
    <a href="about:blank" class="cta animatable">
      More about us
    </a>
  </ElementWithBackgroundImage>
);
