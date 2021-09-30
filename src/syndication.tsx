import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import FourStepApproach from "./views/FourStepApproach.js";
import Footer from "./views/Footer.js";

// import "./consulting.scss";

export default (
  <Body title="Consulting">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Consulting / Coaching</h2>

        <p>
          Your journey with us starts here! We can <strong>audit</strong> your
          e-commerce account, help you <strong>define</strong> a strategy for
          Amazon including <strong>where</strong> to play and{" "}
          <strong>how</strong> to win, and <strong>consult</strong> with you and{" "}
          <strong>coach</strong> your team.
        </p>

        <ul>
          <li>We can provide <strong>training</strong> to you and your team.</li>
          <li>We can <strong>research</strong> your market and competitors.</li>
          <li>We can <strong>audit</strong> your business's current success on Amazon.</li>
        </ul>

        <p>
          We offer several options to help you and your team work out your
          ecommerce strategy and move it forward.
        </p>
      </section>

      <section>
        <h2>Workshops &amp; training</h2>

        <p>
          Are you struggling to determine your ecommerce strategy? <br />
          Or do you think you don't have the right level of ecommerce knowledge
          within your organisation ? <br />
          We can help you:
        </p>

        <ul>
          <li>Design your strategy;</li>
          <li>Define your operational gaps and needs;</li>
          <li>Understand how to create the best content;</li>
          <li>Learn the most efficient and up-to-date ways of driving traffic.</li>
        </ul>

        <p>
          All by using our proven <strong>eCommerce growth model</strong>!
        </p>
      </section>

      <section>
        <h2>Research</h2>

        <p>
          We can help you understand how to win on the digital shelf, by
          researching:
        </p>

        <ul>
          <li>The market you’re in;</li>
          <li>The products you’re selling;</li>
          <li>Your competition;</li>
          <li>How customers perceive your brand and products.</li>
        </ul>

        <p>
          To help you understand your potential and prepare your best ecommerce
          strategy, including which platforms to launch on, and where.
        </p>
      </section>

      <section>
        <h2>Compas / Audit</h2>

        <p>
          Compas is our in-house auditing tool for your ecommerce business. It
          uses machine learning and data analytics to:
        </p>

        <p>
          Your Compas report reveals what your company is doing well and where
          you are lagging behind, acting like a compass in helping you follow
          future directions, based on the four pillars of our eCommerce Growth
          Model:
        </p>

        <ul>
          <li>
            Capture customers' expectations, preferences, experiences and
            feedback about your products.
          </li>
          <li>Present high level trends in review scores.</li>
          <li>
            Extract customers’ sentiment about specific products/categories
            (positive/neutral/negative).
          </li>
        </ul>

        <p>
          Your Compas report reveals what your company is doing well and where
          you are lagging behind, acting like a compass in helping you follow
          future directions, based on the four pillars of our eCommerce Growth
          Model:
        </p>
      </section>

      <FourStepApproach />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
