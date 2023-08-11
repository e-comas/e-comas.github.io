import { h } from "@aduh95/async-jsx";

// import OurProcessIllustration from "./OurProcessIllustration.tsx";

import "./OurServices.scss";
import GlobalExpansion from "./GlobalExpansion.svg";
import RetailMedia from "./RetailMedia.svg";
import Technology from "./Technology.svg";

import "./animate-in.scss";
import "runtime:./animate-in.ts";

export default () => (
  <section id="our-services">
    <h3>Our services</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem
      ad, autem officiis nobis eius quia sunt deserunt temporibus, nihil
      veritatis voluptatem perspiciatis? Dignissimos, magni. Doloremque vitae
      eveniet aliquam alias?
    </p>
    <figure class="animate-in">
      <img src="/images/consulting01.png" alt="illustration" />
      <figcaption>
        <GlobalExpansion />
        <h4>Global Expansion</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <a href="about:blank">Discover more</a>
      </figcaption>
    </figure>
    <figure class="animate-in">
      <img src="/images/consulting02.png" alt="illustration" />
      <figcaption>
        <RetailMedia />
        <h4>Retail Media</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <a href="about:blank">Discover more</a>
      </figcaption>
    </figure>
    <figure class="animate-in">
      <img src="/images/consulting03.png" alt="illustration" />
      <figcaption>
        <Technology />
        <h4>Technology</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <a href="about:blank">Discover more</a>
      </figcaption>
    </figure>
  </section>
);
