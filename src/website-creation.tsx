import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import NativeECommerce from "./views/NativeECommerce.js";
import { ECommerce, EStore } from "./views/eWords.js";
import Footer from "./views/Footer.js";

import "./shopify.scss";
import "runtime:./utils/auto-scroll-data-delay.js";

export default (
  <Body title="Website creation">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise to <strong>create</strong> your Shopify <EStore />
        !
      </h2>

      <p>
        The context of <ECommerce /> is evolving, with the importance of native
        commerce, the need for a selling branded website is critical for brands.
      </p>

      <NativeECommerce />

      <p>
        Each platform is working as a silo, keeping customers inside their
        environment. It becomes of importance for brands to be able to speak the
        language (in terms of technology, logistics and tactics) of these
        platforms, but also to have it’s own <ECommerce /> website.
      </p>

      <div class="slider-wrapper">
        <section data-auto-slide-delay="7500">
          <article>
            <h4>Why Shopify?</h4>

            <p>
              We proudly partner with Shopify, the leading <ECommerce />{" "}
              platform allowing brands to build and manage their own standalone
              online retail stores. Shopify is the third largest online retailer
              behind Amazon and eBay in the US, with 20% market share.
              <br />
              We believe Shopify is one of the keys to a successful omni-channel
              online retail strategy.
              <br />
              Running a Shopify store alongside your Amazon and other{" "}
              <ECommerce /> accounts can boost your sales and amplify your
              brand.
            </p>
            <p>Some facts about Shopify:</p>
            <ul>
              <li>
                Shopify is the fastest growing online store builder in the
                world.
              </li>
              <li>
                Shopify is the most searched <ECommerce /> solution.
              </li>
              <li>
                In 2019, 62 million buyers worldwide made repeat purchases on
                Shopify stores.
              </li>
              <li>
                From 2019 to 2020, Shopify stores saw an increase of 40% in
                customers.
              </li>
              <li>
                Shopify buyers purchased 3.8 times on average from the same
                store.
              </li>
            </ul>
          </article>

          <article>
            <h4>What we will do</h4>
            <p>
              Our strength is to support brands on their e-Commerce journey, on
              marketplaces and on their own <ECommerce /> Shopify website. Our
              roadmap in three steps follows these steps:
            </p>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr aria-hidden="true">
                  <td>
                    <img src="/images/icons/convert.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icons/traffic.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icons/repeat.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <th>Convert</th>
                  <th>Traffic</th>
                  <th>Repeat</th>
                </tr>
              </tbody>
            </table>
            <p>Our process will start with:</p>
            <ol>
              <li>Au audit of your existing online presence.</li>
              <li>Support to design your eCommerce strategy.</li>
              <li>Briefing on your products and brand.</li>
              <li>Development of your Shopify Site.</li>
              <li>Daily Management of the site.</li>
            </ol>
          </article>

          <article>
            <h4>How we will help you</h4>
            <p>We have a team of Shopify experts:</p>
            <ul>
              <li>UX designers;</li>
              <li>Front end and back end designers;</li>
              <li>
                A <a href="syndication.html#content_creation">content team</a>;
              </li>
              <li>
                <a href="consulting.html">
                  <ECommerce /> consultants;
                </a>
              </li>
              <li>
                An <a href="advertising.html">advertising team</a> to generate
                traffic.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
