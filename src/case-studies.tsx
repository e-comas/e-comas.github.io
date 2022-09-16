import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import Picture from "./utils/Picture.js";
import { EComas } from "./views/eWords.js";

import "./index.scss";

const testimonies = [
  {
    image: "/images/case-studies/michelin.jpg",
    name: "Saving time through upload automation",
    text: "When you have thousands of product listings, you need a robust solution for content management and upload. Here’s how we and our partners at Salsify helped a leading tyres brand save time and improve consistency.",
    link: "//go.e-comas.com/l/885733/2022-09-02/bwml5",
  },
];

export default (
  <Body>
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <section id="case-studies">
        <h2>
          What <EComas /> is doing for their clients
        </h2>
        {testimonies.map((testimony) => (
          <figure class="testimonial">
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
