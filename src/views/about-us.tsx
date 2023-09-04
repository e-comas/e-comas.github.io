import { h } from "@aduh95/async-jsx";

import { EComas } from "../views/eWords.tsx";

import "./about-us.scss";
import "runtime:./about-us-runtime.ts";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.tsx";
import ListElement from "./ListElement.tsx";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="/images/Ecomma-b2.jpg"
    class="about-us"
  >
    <h2>About us</h2>
    <h3>
      Why <EComas />?
    </h3>
    <div role="list">
      <ListElement
        title="Benefit"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Benefit"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Benefit"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
    </div>
    <a href="/about-us.html" class="cta animatable">
      More about us 
    </a>
  </ElementWithBackgroundImage>
);
