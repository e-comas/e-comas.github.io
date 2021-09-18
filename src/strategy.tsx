import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import Picture from "./utils/Picture.js";

import "./strategy.scss";

const pageTitle = "Strategy";

export default (
  <Body>
    <Header />
    <Breadcrumbs pageTitle={pageTitle} />
    <main>
      <section>
        <h1>{pageTitle}</h1>
        <img aria-hidden="true" alt="" src="/images/chess.svg" />
        <ul>
          <li>Consumer Prices volatility</li>
          <li>Lost Buy Box rates (prices lower from other selling parties) </li>
          <li>
            Insights and sentiments analysis on customer reviews and questions.
          </li>
        </ul>
        
        <p>
          To check how your distribution is working and how the customer
          perceive your brand and products.
        </p>
      </section>

      <section class="twoThird">
        <Picture src="/images/image00002.jpeg" alt="team picture" />
        <Picture src="/images/IMG_5892.jpg" alt="team picture" />
      </section>

      <section class="howCanWeHelp">
        <h2>How can we help?</h2>
        <a class="cta">More about us</a>
        <details>
          <summary>Group coaching</summary>
          <p>
            With the Amazon Launch Accelerator program you will have access to,
            and benefit from:
          </p>
          <ul>
            <li>Strategic group calls;</li>
            <li>A group page to answer any questions you may have;</li>
            <li>
              8 hours of video training which includes homework and tools;
            </li>
            <li>Discounts on tools and software from our partners;</li>
          </ul>
          <p>
            The ONLY prerequisite is that you need to have an Amazon Account,
            and the time to implement what we teach you.
          </p>
        </details>
        <details>
          <summary>Coaching</summary>
        </details>
        <details>
          <summary>Aim of the workshop</summary>
        </details>
        <details>
          <summary>Topics</summary>
        </details>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
