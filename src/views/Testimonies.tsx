import { Fragment, h } from "@aduh95/async-jsx";

import testimonies from "../utils/testimonies.toml";

import Picture from "../utils/Picture.tsx";

import "runtime:../utils/auto-scroll-data-delay.ts";
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
          <div>
            <Picture
              src={testimony.image || testimony.logo}
              alt={testimony.name}
              class="portrait"
            />
            {h(
              (testimony.logo?.endsWith(".svg") ? "img" : Picture) as any,
              {
                src: testimony.logo,
                alt: testimony.company,
                class: "logo",
              } as any
            )}
          </div>
          <img aria-hidden="true" src="/images/quotes.svg" />
          {/* <time dateTime="1970-01-01">01.01.1970</time> */}
          <strong>{testimony.name}</strong>
          <em>
            {testimony.title} at {testimony.company}
          </em>
        </figcaption>
        <blockquote>{testimony.text}</blockquote>
      </figure>
    ))}
  </>
);

export default (props?: TestimoniesProps) =>
  props?.withBlock ? (
    <div class="testimonies">
      <h2>What Our Clients Say</h2>
      <div class="slider" data-auto-slide-delay="6000">
        <Testimonies />
      </div>
      <a href="/testimonials.html#testimonials" class="cta">
        Read more testimonials
      </a>
    </div>
  ) : (
    <Testimonies />
  );
