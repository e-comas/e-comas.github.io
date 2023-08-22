import { h } from "@aduh95/async-jsx";

import "./what-we-do.scss";
import "runtime:./about-us-runtime.ts";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.tsx";
import ListElement from "./ListElement.tsx";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="/images/Ecomma-b2.jpg"
    class="about-us"
  >
    <h3>What We Do</h3>
    <p>
      From account management and strategy to advertising and localisation (plus
      everything in between!), we’ve got you covered. Sit back and relax with
      our hassle-free 360° turnkey solution.
    </p>
    <div role="list">
      <ListElement
        title="Strategy & Planning"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="EU Expansion"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="US Expansion"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Asia Expansion"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="RoW Expansion"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Account Management"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Retail"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Retail Media"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
      <ListElement
        title="Technology & Analytics"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure assumenda eius repudiandae reprehenderit sequi minus, blanditiis, possimus distinctio et sint, numquam corporis obcaecati dicta deleniti explicabo. Et, voluptates. Dolorem."
      />
    </div>
    <a href="about:blank" class="cta animatable">
      Book a Call
    </a>
  </ElementWithBackgroundImage>
);
