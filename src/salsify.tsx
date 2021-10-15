import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Syndication with Salsify">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/directions.svg">
        <h2>Salsify</h2>
        <p>
          We work with our friends at{" "}
          <a href="https://www.salsify.com/">Salsify</a> to meet all your
          Product Information Management (PIM) needs and help you{" "}
          <strong>win on the digital shelf</strong>. The digital shelf is the
          collection of diverse and rapidly evolving digital touchpoints used by
          shoppers to engage with brands. No matter where they buy - in a retail
          store, from a social influence post, or on an ecommerce site - a
          shopper creates their own personalised, digitally-influenced journey.
          <br />
          To win in this new world, you must take control of your digital shelf.
        </p>
      </ElementWithIcon>

      <section>
        <figure>
          <figcaption>
            <h3>3 principles for winning on the digital shelf</h3>
            <p>
              Just like traditional retail, the digital shelf requires extreme
              focus and discipline to drive maximum growth and beat your
              competition. But the guiding principles to achieve that growth are
              different.
            </p>
            <ol>
              <li>
                <strong>Engage shoppers everywhere : </strong>
                Content has become your brand’s packaging on the digital shelf.
              </li>
              <li>
                <strong>Execute commerce strategies fast : </strong>
                New channels represent opportunities that may or may not work
                for your business. You must learn fast, scale what works, and
                stop what doesn’t.
              </li>
              <li>
                <strong>Be your customers' best partner : </strong>
                Delivering the content your retailers and distributors need
                makes you a partner they will prioritise, driving even more
                growth for your business.
              </li>
            </ol>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Our partnership with Salsify</h3>
            <p>
              Salsify can optimise your PIM, fully operationalising your product
              content so that you can act quickly on data-driven insights,
              evolving your business and engaging your customers.
            </p>
            {/* Insert graphic here */}
            <p>
              We can implement Salsify on your behalf to organise your content
              and upload it to all marketplaces. Our team of experts can also
              help you manage your day-to-day business activities on Salsify.
            </p>
          </figcaption>
          <img src="/images/ECOM_SCHEMA_1.svg" alt="Grow in retail" />
          <img src="/images/ECOM_SCHEMA_2.svg" alt="Grow in retail" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
