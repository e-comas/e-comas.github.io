import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import "./profitero.scss";

export default (
  <Body>
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        Profitero: the <strong>next level</strong> in market insights
      </h2>
      <p>
        Profitero provides over 4000 global brands with cutting edge technology
        designed to accelerate e-commerce sales and save time. Their proprietary
        technology monitors over 600 retailers globally, daily, mapping products
        through the digital path to purchase to answer the fundamental questions
        necessary to convert buyers:
      </p>
      <ul>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/time.svg" alt="" />
          </div>
          <span>Is the product in stock?</span>
        </li>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/time.svg" alt="" />
          </div>
          <span>Is it visible to the customer?</span>
        </li>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/time.svg" alt="" />
          </div>
          <span>
            Am I providing the customer enough information to buy my product?
          </span>
        </li>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="images/icons/time.svg" alt="" />
          </div>
          <span>Is my price competitive enough to win the sale?</span>
        </li>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="images/icons/time.svg" alt="" />
          </div>
          <span>Do my product reviews reflect a positive experience?</span>
        </li>
        <li>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="images/icons/time.svg" alt="" />
          </div>
          <span>
            Has the market share increased and am I gaining category share?
          </span>
        </li>
      </ul>
      <section>
        <article>
          <img src="/images/icons/time.svg" alt="" aria-hidden="true" />
          <h3>React Faster. Grow Faster.</h3>
          <p>
            Get a complete line of sight into all the factors impacting traffic,
            conversion rates and sales for your products: content, in-stock
            rates, search position, pricing and reviews. Make more informed and
            faster decision to improve your business.
          </p>
        </article>
        <article>
          <img src="/images/icons/shield.svg" alt="" aria-hidden="true" />
          <h3>Defend your brand</h3>
          <p>
            Get a complete handle on the impact of 3P sellers and Buy Box Sales
            leakage on your business so you can protect sales and your brand
            reputation with consumers. Know why you are losing Buy Box, instead
            of being left in the dark.
          </p>
        </article>
        <article>
          <img src="/images/icons/thumb-up.svg" alt="" aria-hidden="true" />
          <h3>Achieve more, with less.</h3>
          <p>
            Profitero’s automated and prescriptive action-alerts reduce the need
            for manual analysis and allow you to accomplish more with the
            limited time and resources you have.
          </p>
        </article>
      </section>
      <p>
        <a href="about:blank" className="cta">
          Know more about our partnership
        </a>
      </p>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
