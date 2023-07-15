import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import { ECommerce } from "./views/eWords.tsx";
import Footer from "./views/Footer.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";

import "./white-paper-form.scss";
import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

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
        src="/images/white-paper-4.jpg"
        tagName="section"
      >
        <h3>Owning your brand: why you need brand registry</h3>
        <p>
          Amazon experts are unanimous on this: all Amazon sellers should enrol
          in Brand Registry. Here's our complete guide to Amazon Brand Registry,
          including all the features you might not already know about.
        </p>
        <a
          href="//go.e-comas.com/l/885733/2023-01-17/l8998"
          target="_blank"
          className="cta open-in-modal"
        >
          Download the white paper
        </a>
      </ElementWithBackgroundImage>

      <ElementWithBackgroundImage
        src="/images/white-paper-3.jpg"
        tagName="section"
      >
        <h3>When luxury meets the mass market</h3>
        <p>
          Amazon Luxury Stores is now live in Europe and the US. Read our
          deep-dive into what Amazon Luxury Stores is, how it looks for
          customers, and the pros and cons for luxury brands.
        </p>
        <a
          href="//go.e-comas.com/l/885733/2022-06-20/83wgg"
          target="_blank"
          className="cta open-in-modal"
        >
          Download the white paper
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
          href="//go.e-comas.com/l/885733/2020-11-09/4vbg"
          target="_blank"
          className="cta open-in-modal"
        >
          Download the white paper
        </a>
      </ElementWithBackgroundImage>

      <ElementWithBackgroundImage
        src="/images/white-paper-1.png"
        tagName="section"
      >
        <h3>How to manage Amazon</h3>
        <p>
          Here’s our beginner’s guide to building a solid Amazon strategy,
          managing your operations, creating content and growing traffic.
        </p>
        <a
          href="//go.e-comas.com/l/885733/2022-09-02/bwmm8"
          className="cta open-in-modal"
        >
          Download our guide
        </a>
      </ElementWithBackgroundImage>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
