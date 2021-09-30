import { Fragment, h } from "@aduh95/async-jsx";

import testimonies from "../utils/testimonies.toml";

import Picture from "../utils/Picture.js";

import "./Testimonies.scss";

export default () => (
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
