import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Testimonies from "./views/Testimonies.js";
import Picture from "./utils/Picture.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="About eComas">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/trolley.svg">
        <h2>About e-Comas</h2>
        <p>
          e-Comas - <ECommerce /> Made Simple was founded by <ECommerce />{" "}
          expert Jérôme de Guigné in 2013, with the simple idea of helping
          brands sell products online.
        </p>
        <p>
          We quickly realised companies were struggling with establishing
          profitable and sustainable <ECommerce /> strategies. That’s when
          ‘Amazon Made Simple’ was born, which later became ‘<ECommerce /> Made
          Simple’ - e-Comas.
        </p>

        <p>
          Today we work with major multinational brands to define and design
          strong omnichannel expansion strategies, integrating Amazon, Shopify,
          CDiscount, Veepee, Bol, Walmart and all other major <ECommerce />
          platforms.
          <br />
          With a hands-on approach, our experts coach brands and handle their
          accounts to sustainably grow their business and improve their agility
          in tackling everyday challenges with online retail. We get you set up,
          we scale you and make the business profitable, handling your account,
          the content and the advertising.
        </p>
        <p>
          Put simply, we help brands grow faster on <ECommerce /> - globally,
          fast, across multiple online channels!
        </p>
      </ElementWithIcon>
      <section>
        <figure>
          <figcaption>
            <h2>Experience</h2>

            <p>
              We have many years of{" "}
              <strong>
                <ECommerce /> experience
              </strong>{" "}
              between our amazing 45-strong team, and it comes from{" "}
              <strong>all the right places</strong> – Amazon and other
              platforms, brand owners and trade specialists.
            </p>

            <p>
              We've helped many brands, big and small, grow their online
              presence and <strong>increase their sales</strong> through Amazon
              and other <ECommerce /> platforms. Don't just take our word for it
              – see our <strong>stats</strong> and <strong>testimonials</strong>{" "}
              from happy customers.
            </p>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Figures</h3>
            <h5>The numbers speak for themselves...</h5>

            <ul>
              <li>
                We can increase sales by <strong>5 times</strong> within 2 years
                … Sometimes up to <strong>10 times</strong> in 2 years.
              </li>
              <li>
                We can reduce operational costs by <strong>50%</strong>.
              </li>
              <li>
                We've managed <strong>+100,000</strong> listings.
              </li>
              <li>
                We've opened <strong>+500</strong> Vendor/Seller accounts.
              </li>
              <li>
                We've handled <strong>+€1,000,000</strong> in advertising
                campaigns.
              </li>
            </ul>

            <br />

            <h5>Some more stats</h5>

            <ul>
              <li>
                <ECommerce /> retail sales are forecast to grow to{" "}
                <strong>$3.4 trillion</strong> by 2025 (Forbes).
              </li>
              <li>
                US retail m-commerce sales grew <strong>41.4%</strong> in 2020
                and will grow another <strong>15.2%</strong> in 2021, to reach{" "}
                <strong>$359.32 billion</strong>. Annual sales should nearly{" "}
                <strong>double</strong> between now and 2025 (
                <a href="http://www.emarketer.com" target="_blank">
                  www.emarketer.com
                </a>
                ).
              </li>
              <li>
                By 2023, there will be <strong>5.3 billion</strong> total
                internet users - <strong>66%</strong> of the global population (
                <a href="http://www.cisco.com" target="_blank">
                  www.cisco.com
                </a>
                ).
              </li>
              <li>
                Consumer attention span is a maximum of{" "}
                <strong>8 seconds!</strong> (
                <a href="https://ebusinessinstitute.com/" target="_blank">
                  www.ebusinessinstitute.com
                </a>
                ).
              </li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section>
        <Testimonies withBlock />
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
