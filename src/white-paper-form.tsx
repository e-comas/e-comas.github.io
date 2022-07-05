import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import { ECommerce } from "./views/eWords.js";
import Footer from "./views/Footer.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";

import "./white-paper-form.scss";
import "runtime:./utils/open-form-in-modal.js";

export default (
  <Body title="White paper">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>White paper</h2>
      <p>
        We research hot topics in the <ECommerce /> industry and report our
        findings in our in-depth white papers. Learn more from us here!
      </p>

      <ElementWithBackgroundImage
        src="/images/white-paper-1.png"
        tagName="section"
      >
        <h3>How to manage Amazon</h3>
        <p>
          Here’s our beginner’s guide to building a solid Amazon strategy,
          managing your operations, creating content and growing traffic.
        </p>
        <a href="https://bit.ly/3dtG2Ka" className="cta">
          Read our guide
        </a>
      </ElementWithBackgroundImage>

      <ElementWithBackgroundImage
        src="/images/white-paper-2.png"
        tagName="section"
      >
        <h3>The voice of your customer</h3>
        <p>
          Customers on Amazon think differently to customers in other retail
          spheres. When specialty paper brand T/D3sixty felt bamboozled by the
          feedback they were getting on Amazon, they turned to our analytics
          tool Compas. Here’s how we helped.
        </p>
        <a
          href="//go.pardot.com/l/885733/2020-11-09/4vbg"
          target="_blank"
          className="cta open-in-modal"
        >
          Download the white paper
        </a>
      </ElementWithBackgroundImage>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
