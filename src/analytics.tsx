import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

export default (
  <Body title="SHOPIFY PARTNER">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Our partner: Shopify</h2>

        <p>
          We proudly partner with Shopify, the leading ecommerce platform allowing
          brands to build and manage their own standalone online retail stores.{" "}
        </p>

        <p>
          Shopify is the third largest online retailer behind Amazon and eBay in
          the US, with 20% market share.
        </p>

        <p>
          We believe Shopify is one of the keys to a successful omni-channel
          online retail strategy.
        </p>

        <p>
          Running a Shopify store alongside your Amazon and other ecommerce
          accounts can boost your sales and amplify your brand.
        </p>

        <h5>Some facts about Shopify: </h5>

        <ul>
          <li>Shopify is the fastest growing online store builder in the world.</li>
          <li>Shopify is the most searched ecommerce solution.</li>
          <li>In 2019, 62 million buyers worldwide made repeat purchases on Shopify stores.</li>
          <li>From 2019 to 2020, Shopify stores saw an increase of 40% in customers.</li>
          <li>Shopify buyers purchased 3.8 times on average from the same store.</li>
        </ul>

        <p>
          At e-Comas, we can build you a strategy based on a Shopify store coupled
          with Amazon and other ecommerce platforms.{" "}
        </p>

        <p>
          <strong>
            <em>
              We can help you create and manage your Shopify store, drive growth
              to it, boost your sales and grow your brand quickly, efficiently and
              globally.
            </em>
          </strong>
        </p>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
