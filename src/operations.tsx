import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";
import SlidingText from "./views/SlidingText.js";
import HoverableMenu from "./views/HoverableMenu.js";
import ECommerce from "./views/eCommerce.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";

import "./classic-page.scss";

export default (
  <Body title="Operations">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise to <strong>run</strong> your <ECommerce />!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We handle your{" "}
          <strong>
            <ECommerce /> account
          </strong>
          .
        </SlidingText>
        <SlidingText>
          We can <strong>sell</strong> your products on our seller account.
        </SlidingText>
        <SlidingText>
          We can manage your <strong>logistics &amp; VAT</strong> to kickstart
          your business.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Account Management.png"
        >
          <h3>Account management</h3>
          <p>
            Focus on your business core and outsource the complexity of running
            your account.
          </p>
          <p>
            <a href="#account_management">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage tagName="section" src="/images/Retail.png">
          <h3>Retail</h3>
          <p>
            You are not able to sell your products? Let us do it on our own
            Amazon seller account in EU, US or India.
          </p>
          <p>
            <a href="#retail">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Logistics &amp; VAT services.png"
        >
          <h3>Logistics &amp; VAT services</h3>
          <p>
            We have partnered with key players to provide you with the best
            service to get started in <ECommerce />.
          </p>
          <p>
            <a href="#logistics">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <section>
        <h3>Our process</h3>
        <p>(Work in progress)</p>
      </section>

      <section id="account_management">
        <figure>
          <figcaption>
            <h3>Account management</h3>

            <p>
              We will take over all day-to-day management aspects of your
              account to let you focus on your business. Experience our
              professional CART approach:
            </p>

            <ul>
              <li>
                <strong>Cataloguing</strong>: we upload your content, we make
                sure it appears perfectly, and stays there.
              </li>
              <li>
                <strong>Advertising</strong>: we handle your PPC advertising,
                and can also offer DSP Amazon advertising or even off-Amazon
                advertising.
              </li>
              <li>
                <strong>Reporting</strong>: we will share with you our
                dashboard, using our LOOTS reporting tool.
              </li>
              <li>
                <strong>Troubleshooting</strong>: we solve all the day-to-day
                issues Amazon and other marketplaces put in your way and prevent
                you from selling.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: My Carry Potty
            </a>
          </figcaption>
          <Picture src="/images/Account Management.png" alt="" />
        </figure>
      </section>

      <section id="retail">
        <figure>
          <img src="/images/Retail.png" alt="Grow in retail" />
          <figcaption>
            <h3>Retail</h3>

            <p>
              You cannot open a selling account, or you need a quick solution to
              be on the market? You can use our own selling account, and benefit
              from our retail offer.
            </p>

            <ul>
              <li>
                Our accounts are active in all European, North American
                countries and in India.
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

      <section id="logistics">
        <figure>
          <figcaption>
            <h3>Logistics &amp; VAT services</h3>

            <p>
              We simplify your logistics. Send us the quantity we require and we
              can handle everything, including:
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
          <img
            src="/images/Logistics &amp; VAT services.png"
            alt="Salsify PXM"
          />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
