import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import Picture from "./utils/Picture.js";

// import "./strategy.scss";

const pageTitle = "Operation";

export default (
  <Body>
    <Header />
    <Breadcrumbs pageTitle={pageTitle} />
    <main>
      <section>
        <h1>{pageTitle}</h1>
        <img aria-hidden="true" alt="" src="/images/euro-cog.svg" />
        <ul>
          <li>Out Of Stock occurrences</li>
          <li>Logistics Performance (chargebacks, customer satisfaction)</li>
          <li>Customer support performance and answer to questions</li>
        </ul>
        <p>
          To check if your operations performance is able to support your growth
        </p>
      </section>

      <section class="twoThird">
        <Picture src="/images/IMG_5892.jpg" alt="team picture" />
        <Picture src="/images/cool_picture-3.jpeg" alt="team picture" />
      </section>

      <section>
        <h2>Account management</h2>
        <ul>
          <li>
            Outsource the management of your e-Commerce Account to an
            experienced team
          </li>
          <li>Benefit from the experience of a seasoned team</li>
          <li>
            Grow faster and expand internationally with a multi-lingual team
          </li>
          We will take over all day to day management aspects of your account to
          let you focus
          <li>on your work</li>
        </ul>
        <h3>Services</h3>
        <ul>
          <li>Follow up of the catalogue content</li>
          <li>Management of the advertising campaigns (option)</li>
          <li>Reporting (weekly) with strategic monthly reporting</li>
          <li>Trouble shooting of all issues arising on the account</li>
        </ul>
      </section>

      <section class="inverted">
        <h2>Retail</h2>
        <h3>Expand in all Europe / USA</h3>
        <ul>
          <li>
            Our account is active in all European and North American countries
          </li>
          <li>
            We have VAT accounts in all EU countries and will take care of all
            fiscal declarations for you
          </li>
          <li>
            Save up to 2 FTE handling all the legal aspects of your Amazon
            approach
          </li>
          <li>
            Secure your business with a proven account, with no risk of getting
            your brand Suspended
          </li>
        </ul>
        <h3>Simple logistics</h3>
        <ul>
          <li>
            We will take care of preparing the orders and following Out Of Stock
            issues
          </li>
          <li>
            Ship the quantity we have provided and we’ll take care of the rest
          </li>
        </ul>
      </section>

      <section class="supplyChain">
        <h2>The supply chain</h2>
        <ol>
          <li>e-Comas sends an order to brand.</li>
          <li>Brand delivers FBA order to Amazon (D Day) in Germany.</li>
          <li>
            Amazon dispatches stock in the different Amazon warehouses (D+5
            days).
          </li>
          <li>End customer buys on amazon (D+ 10 days).</li>
          <li>Amazon sends order to warehouse (D+10 days).</li>
          <li>Delivery to end consumer (D+11 days).</li>
          <li>Amazon pays e-Comas(D+26 days).</li>
          <li>e-Comas pays to Sunstar (D+30 days).</li>
        </ol>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
