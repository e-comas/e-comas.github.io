import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import { ECommerce } from "./views/eWords.js";
import Footer from "./views/Footer.js";

import "./white-paper-form.scss";
import "runtime:./utils/frame-auto-height.js";

export default (
  <Body title="White paper">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>White paper</h2>
      <p>
        We research hot topics in the <ECommerce /> industry and report our
        findings in our in-depth white papers. Learn more from us here!
      </p>

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
              href="https://go.pardot.com/l/885733/2020-12-18/7pxy/885733/1608299447maytBPCN/VOICEOFCUSTOMER_QUOTE__2_.pdf"
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
              issues with using the <ECommerce /> giant. The results of that
              survey are in this white paper – together with our own expert
              advice on how you can streamline your organisation and support
              your operations team to make those issues a thing of the past.
            </p>
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
