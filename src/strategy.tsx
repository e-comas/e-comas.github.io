import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import Picture from "./utils/Picture.tsx";
import ElementWithIcon from "./utils/ElementWithIcon.tsx";
import AnimatedImage from "./utils/AnimatedImage.tsx";

import "./strategy.scss";

const pageTitle = "Strategy";

export default (
  <Body title="Strategy">
    <Header />
{/* <Breadcrumbs /> */} */}
    <main id="main-content">
      <ElementWithIcon tagName="section" src="/images/chess.svg">
        <h1>{pageTitle}</h1>
        <ul>
          <li>Consumer Prices volatility</li>
          <li>Lost Buy Box rates (prices lower from other selling parties) </li>
          <li>
            Insights and sentiments analysis on customer reviews and questions.
          </li>
        </ul>

        <p>
          → To check how your distribution is working and how the customer
          perceive your brand and products.
        </p>
      </ElementWithIcon>

      <section class="twoThird">
        <AnimatedImage src="/images/gif.mp4" alt="" />
        <Picture src="/images/IMG_5892.jpg" alt="team picture" />
      </section>

      <section class="howCanWeHelp">
        <h2>How can we help?</h2>
        <a class="cta">More about us</a>
        <div>
          <details>
            <summary>Group coaching</summary>
            <p>
              With the Amazon Launch Accelerator program you will have access
              to, and benefit from:
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
        </div>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
