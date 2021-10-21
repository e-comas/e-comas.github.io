import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import FourStepApproach from "./views/FourStepApproach.js";
import SlidingText from "./views/SlidingText.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./classic-page.scss";

const HoverableMenu = "div";

export default (
  <Body title="Content / Syndication">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise to <strong>boost</strong> your eCommerce
      </h2>

      <SlidingText>
        We define your <strong>eCommerce strategy</strong> with your team
      </SlidingText>
      <SlidingText>
        We offer <strong>Amazon consulting</strong> to solve your issues
      </SlidingText>
      <SlidingText>
        We can <strong>audit</strong> your eCommerce accounts with our Compas
        tool
      </SlidingText>

      <HoverableMenu>
        <section>
          <h3>eCommerce strategy</h3>
          <p>
            Are you struggling to determine your ecommerce strategy?
            <br />
            Or do you think you don't have the right level of ecommerce
            knowledge within your organisation?
            <br />
            We can help you!
          </p>
        </section>
        <section>
          <h3>Amazon consulting</h3>
          <p>
            We help you solve pressing issues with our team of experts, who know
            how to quickly unblock, solve and find solutions.
          </p>
        </section>
        <section>
          <h3>Account audit</h3>
          <p>Lorem Ipsum</p>
        </section>
      </HoverableMenu>

      <FourStepApproach />

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
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

      <section>
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
          <Picture src="/images/IMG_5892.jpg" alt="" />
        </figure>
      </section>

      <section>
        <figure>
          <Picture src="/images/IMG_5892.jpg" alt="" />
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
