import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";

import Picture from "./utils/Picture.tsx";
import { EComas } from "./views/eWords.tsx";

import "./index.scss";
import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

const testimonies = [
  {
    // N.B.: Michelin doesn't want its logo or name to appear on the illustration.
    image: "/images/case-studies/michelin.png",
    id: "michelin",
    name: "Saving time through upload automation",
    text: "When you have thousands of product listings, you need a robust solution for content management and upload. Here’s how we and our partners at Salsify helped a leading tyres brand save time and improve consistency.",
    link: "//go.e-comas.com/l/885733/2022-09-02/bwml5",
  },
  {
    image: "/images/case-studies/zerowater.png",
    id: "zerowater",
    name: "Finding the ad strategy that works",
    text: "There are lots of different ways to advertise Amazon, depending on what you want your ads to do. Find out how we helped ZeroWater find the winning formula for their advertising on Amazon DSP.",
    link: "//go.e-comas.com/l/885733/2023-01-16/l812r",
  },
  {
    image: "/images/case-studies/miamily.png",
    id: "miamily",
    name: "The social strategy",
    text: "If you’re selling on Amazon, your ad strategy doesn’t need to be limited to Amazon. Here’s how we helped Swiss baby brand MiaMily interweave their social media and advertising to enhance their brand presence and grow their sales.",
    link: "//go.e-comas.com/l/885733/2023-01-16/l812v",
  },
  {
    image: "/images/case-studies/mycarrypotty.png",
    id: "mycarrypotty",
    name: "Creating content for other countries",
    text: "When expanding globally, the key to building trust in your brand is good-quality localised content. Here’s how we helped My Carry Potty grow their Amazon presence internationally.",
    link: "//go.e-comas.com/l/885733/2023-01-16/l813c",
  },
];

export default (
  <Body>
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <section id="case-studies">
        <h2>Customer Success Stories</h2>
        {testimonies.map((testimony) => (
          <figure class="testimonial" id={testimony.id}>
            <Picture src={testimony.image} alt={testimony.name} />
            <figcaption>
              <strong>{testimony.name}</strong>
              <p>{testimony.text}</p>
              <a
                href={testimony.link}
                target="_blank"
                className="cta open-in-modal"
              >
                Download the case study
              </a>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
