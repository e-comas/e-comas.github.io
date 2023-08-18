import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";

import "./profitero.scss";

export default (
  <Body>
    <Header />
    <Breadcrumbs />
    <main id="main-content">
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
        <li style={"color:#FDD03F" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/save.svg" alt="" />
          </div>
          <span>Is the product in stock?</span>
        </li>
        <li style={"color:#DED152" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/find.svg" alt="" />
          </div>
          <span>Is it visible to the customer?</span>
        </li>
        <li style={"color:#C0D26B" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/goggles.svg" alt="" />
          </div>
          <span>
            Am I providing the customer enough information to buy my product?
          </span>
        </li>
        <li style={"color:#A2D385" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/price-tag.svg" alt="" />
          </div>
          <span>Is my price competitive enough to win the sale?</span>
        </li>
        <li style={"color:#85D4A1" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/doc-approved.svg" alt="" />
          </div>
          <span>Do my product reviews reflect a positive experience?</span>
        </li>
        <li style={"color:#69D5BD" as any}>
          <div aria-hidden="true" class="icon-wrapper">
            <img src="/images/icons/money-graph.svg" alt="" />
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
        <a
          href="//go.e-comas.com/l/885733/2021-11-22/4fy3v/885733/1637569997FEgshzPK/one_pager_for_e_Comas.pdf"
          className="cta"
        >
          Know more about our partnership
        </a>
      </p>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
