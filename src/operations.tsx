import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";

import "./classic-page.scss";

export default (
  <Body title="Operations">
    <Header />
    <Breadcrumbs />
    <main>
      <ElementWithIcon tagName="section" src="/images/euro-cog.svg">
        <h2>Operations</h2>

        <p>
          We can help you with the <strong>operations</strong> of your ecommerce
          business, on Amazon, Shopify, CDiscount, Veepee, Bol, Walmart, and
          more.
        </p>

        <p>
          Whether you want to <strong>outsource</strong> the entire operation to
          us or simply need us to help <strong>manage</strong> your Amazon
          catalogue, we can provide exactly what you need to run your online
          sales smoothly.
        </p>

        <ul>
          <li>We can manage your account.</li>
          <li>We can help you with logistics and VAT.</li>
          <li>We cover all major ecommerce platforms, globally.</li>
        </ul>
      </ElementWithIcon>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>Account management</h3>

            <p>
              You can outsource the management of your ecommerce account to our
              seasoned team.
            </p>

            <p>
              We will take over all day-to-day management aspects of your
              account to let you focus on your business.
            </p>

            <ul>
              <li>Benefit from our expert knowledge and long experience.</li>
              <li>
                Grow faster and more confidently on multiple ecommerce
                platforms: Amazon, Shopify, CDiscount, Veepee, Bol, Walmart, and
                more.
              </li>
              <li>
                Expand internationally with our multilingual team: in Europe, in
                theAmericas, and in Asia.
              </li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Services</h3>

            <p>
              We also offer a full range of services to help you with any area
              of your operations that need extra support - including:
            </p>

            <ul>
              <li>Follow-up of catalogue content;</li>
              <li>Management of advertising campaigns;</li>
              <li>Weekly reporting, with strategic monthly reporting;</li>
              <li>Troubleshooting on all issues arising on the account.</li>
            </ul>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section>
        <figure>
          <img src="/images/ECOM_SCHEMA_3.svg" alt="Grow in retail" />
          <figcaption>
            <h3>Retail</h3>

            <p>
              We can take care of your Amazon business with our e-Comas Seller
              Account, saving you up to 2 FTE.{" "}
            </p>

            <p>We'll help you expand your sales globally!</p>

            <ul>
              <li>
                Our account is active in all European, North American countries
                and in India.
              </li>
              <li>
                We have VAT accounts in all EU countries and will take care of
                all fiscal declarations for you.
              </li>
              <li>
                We can support you for all the legal aspects of your Amazon
                approach.
              </li>
              <li>
                Secure your business with a proven account, with no risk of
                getting your brand suspended.
              </li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Logistics</h3>

            <p>
              We can also simplify your logistics. Send us the quantity we
              require and we can handle everything, including:
            </p>

            <ul>
              <li>Importing your goods;</li>
              <li>Warehousing your goods;</li>
              <li>
                Re-working your products packaging (labelling, bundling,...);
              </li>
              <li>Preparing your orders;</li>
              <li>Handling out of stock issues.</li>
            </ul>
          </figcaption>
          <img src="/images/ECOM_SCHEMA_4.svg" alt="Salsify PXM" />
        </figure>
      </section>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
          <figcaption>
            <h3>VAT</h3>

            <p>
              If you’re selling in the EU, it’s now mandatory to register to pay
              VAT (value added tax). We can help you design your European
              strategy and set up your account, including:
            </p>

            <ul>
              <li>VAT number;</li>
              <li>EORI number;</li>
              <li>One Stop Shop (OSS) requirements.</li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section>
        <figure>
          <figcaption>
            <h3>Reporting / Dashboarding</h3>

            <p>
              We have built our own dashboards to follow your sales. We can also
              help you create the relevant dashboard for your own business, or
              leverage the leading reporting solution from{" "}
              <a href="/website-creation.html">Profitero</a>.
            </p>

            <p>
              Our dashboards are a blend of our expertise on ecommerce and our
              knowledge of the different ecommerce systems (Vendor or Seller).
              We focus on:
            </p>

            <ul>
              <li>Defining the right KPIs.</li>
              <li>
                Integrating multi-country sales and advertising on one
                dashboard.
              </li>
              <li>Leveraging market data information, with market share.</li>
              <li>Leveraging data on BSRs and keyword ranking.</li>
            </ul>
          </figcaption>
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
