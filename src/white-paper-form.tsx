import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./contact.scss";

export default (
  <Body title="White paper">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon src="/images/chess.svg" tagName="section">
        <h2>White paper</h2>
        <p>Lorem Ispum</p>
      </ElementWithIcon>

      <section>
        <figure>
          <figcaption>
            <h3>
              Case Study: Voice of Customer (Voc) Research for a Manufacturer
            </h3>
            <p>
              Read our latest success story to find out how we helped a client
              identify and understand its customer sentiment on Amazon and
              improve its product listings to encourage more sales and reduce
              return rates.
            </p>
            <a
              href="https://e-comas.com/press-release/VOICEOFCUSTOMER_QUOTE%20(2).pdf"
              className="cta"
            >
              Read the case study
            </a>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>
              How to manage Amazon: Best practice on how to organise a business
              to manage its Amazon activity
            </h3>
            <p>
              Is lack of resource and knowledge holding back your Amazon sales?
            </p>
            <p>
              In partnership with the eBusiness Institute, we at e-Comas
              surveyed brands that sell on Amazon to find out their biggest
              issues with using the eCommerce giant. The results of that survey
              are in this white paper – together with our own expert advice on
              how you can streamline your organisation and support your
              operations team to make those issues a thing of the past.
            </p>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>About the eBusiness Institute</h3>
            <p>
              eBusiness Institute offers outstanding digital consultancy and
              creative agency services. They work with medium-to-large
              multinational organisations to drive their digital transformations
              from strategy to execution. They also specialise in delivering
              truly stand-out, world-class content and design solutions on
              behalf of brands. In all, eBusiness Institute provides business
              leaders with the know-how, tools and creativity they need to
              enable long-term eCommerce and offline sales success.
            </p>
            <a href="https://utm.io/uoyr" className="cta">
              Learn more
            </a>
          </figcaption>
        </figure>
      </section>
      <iframe
        title="Contact us form"
        width="100%"
        height="1305"
        frameborder="0"
        allowtransparency
        loading="lazy"
        src="//go.pardot.com/l/885733/2020-11-09/4vbg"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
