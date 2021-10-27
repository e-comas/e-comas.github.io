import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import FourStepApproach from "./views/FourStepApproach.js";
import SlidingText from "./views/SlidingText.js";
import HoverableMenu from "./views/HoverableMenu.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

export default (
  <Body title="Content / Syndication">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise to <strong>boost</strong> your eCommerce
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We define your <strong>eCommerce strategy</strong> with your team.
        </SlidingText>
        <SlidingText>
          We offer <strong>Amazon consulting</strong> to solve your issues.
        </SlidingText>
        <SlidingText>
          We can <strong>audit</strong> your eCommerce accounts with our COMPAS
          tool.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting01.png"
        >
          <h3>eCommerce strategy</h3>
          <p>
            We support brands to understand the key success factors, and define
            proven strategies for their ecommerce presence.
          </p>
          <p>
            <a href="#strategy">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting02.png"
        >
          <h3>Amazon consulting</h3>
          <p>
            We help you solve pressing issues with our team of experts, who know
            how to quickly unblock, solve and find solutions.
          </p>
          <p>
            <a href="#consulting">Consult with our experts</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting03.png"
        >
          <h3>Account audit</h3>
          <p>
            COMPAS by e-Comas provides you insights on how you are doing on
            Amazon, but also on the market &amp; the competition, guiding you to
            better sales and profits.
          </p>
          <p>
            <a href="#audit">Take a closer look</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <FourStepApproach />

      <section id="strategy">
        <figure>
          <Picture src="/images/consulting01.png" alt="" />
          <figcaption>
            <h2>eCommerce strategy</h2>

            <p>Defining an eCommerce strategy consists of different steps:</p>

            <ul>
              <li>
                Audit: we study your presence, the health of your accounts and
                the market dynamics, the size of your competition.
              </li>
              <li>
                Workshop: usually for a full day where we will deliver the
                results of our audit, a gap analysis and train you on the key
                success factors to win in eCommerce.
              </li>
              <li>
                Deliverable: a clear strategy on where to play, with which
                account, which pricing &amp; portfolio strategy, and in which
                timing.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: SUKY
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="consulting">
        <figure>
          <figcaption>
            <h2>Amazon consulting</h2>

            <p>
              Our team of world class experts will solve your most pressing
              issues:
            </p>

            <ul>
              <li>
                Brand registration: to register your brand, protect it and make
                sure you own the content online.
              </li>
              <li>
                Account reinstatement: your account is blocked? Let us look into
                it, and bring it back to life. But careful this takes time and
                patience.
              </li>
              <li>
                Catalogue issues: your content is lost, Amazon is not
                responding, and nothing is showing, let us look into it and get
                it back live.
              </li>
              <li>
                Vendor negotiation: you are locked with amazon on negotiations,
                let us support you to get the best outcome for your brand.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Michelin
            </a>
          </figcaption>
          <Picture src="/images/consulting02.png" alt="" />
        </figure>
      </section>

      <section id="audit">
        <figure>
          <Picture src="/images/consulting03.png" alt="" />
          <figcaption>
            <h2>Account Audit</h2>

            <p>
              Compas is our in-house auditing tool for your eCommerce business.
              It uses machine learning and data analytics to:
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
              Your Compas report reveals what your company is doing well and
              where you are lagging behind, acting like a compass in helping you
              follow future directions, based on the four pillars of our
              eCommerce Growth Model.
            </p>

            <a href="#" className="cta">
              Case study: Compas
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
