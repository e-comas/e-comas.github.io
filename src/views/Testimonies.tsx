import { Fragment, h } from "@aduh95/async-jsx";

import testimonies from "../utils/testimonies.toml";

import Picture from "../utils/Picture.js";

import "./Testimonies.scss";

interface TestimoniesProps {
  withBlock?: boolean;
  ref?: any;
  children?: any[];
}

const Testimonies = () => (
  <>
    {testimonies.map((testimony) => (
      <figure class="testimonial">
        <figcaption>
          <Picture
            src={testimony.image || testimony.logo}
            alt="Name of the TRUSTOR"
          />
          {h(
            (testimony.logo?.endsWith(".svg") ? "img" : Picture) as any,
            {
              src: testimony.logo,
              alt: testimony.company,
              class: "logo",
            } as any
          )}
          {/* <time dateTime="1970-01-01">01.01.1970</time> */}
          <strong>{testimony.name}</strong>
          <em>{testimony.title}</em>
        </figcaption>
        <blockquote>{testimony.text}</blockquote>
      </figure>
    ))}
  </>
);

export default (props?: TestimoniesProps) =>
  props?.withBlock ? (
    <div class="testimonies">
      <h2>What our clients are saying</h2>
      <img aria-hidden="true" src="/images/quotes.svg" />
      <div class="slider">
        <Testimonies />
      </div>
      <a href="/testimonials.html#testimonials" class="cta">
        The testimonies
      </a>
    </div>
  ) : (
    <Testimonies />
  );
