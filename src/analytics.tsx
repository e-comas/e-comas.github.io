import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Picture from "./utils/Picture.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import SlidingText from "./views/SlidingText.tsx";
import HoverableMenu from "./views/HoverableMenu.tsx";
import { ECommerce } from "./views/eWords.tsx";
import Footer from "./views/Footer.tsx";

import "./classic-page.scss";

export default (
  <Body title="Analytics">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>
        World class expertise <strong>analytics</strong> to{" "}
        <strong>drive</strong> your <ECommerce />!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We help you define the right <strong>KPIs</strong> for your business.
        </SlidingText>
        <SlidingText>
          We <strong>automate</strong> your reporting processes.
        </SlidingText>
        <SlidingText>
          We provide <strong>market insights</strong> to take the right business
          decisions.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Relevant KPIs.png"
        >
          <h3>Relevant KPIs</h3>
          <p>
            We have designed our own internal LOOTS reporting framework to
            simplify decision making.
          </p>
          <p>
            <a href="#relavant_KPIs">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Reporting Automation.png"
        >
          <h3>Reporting automation</h3>
          <p>We can automate your reporting and create bespoke dashboards.</p>
          <p>
            <a href="#reporting_automation">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Market Insights.png"
        >
          <h3>Market insights</h3>
          <p>
            We can provide actionable market insights to take the right
            decisions.
          </p>
          <p>
            <a href="#market_insights">Read further</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <section id="relavant_KPIs">
        <figure>
          <figcaption>
            <h3>Relevant KPIs</h3>

            <p>
              <ECommerce /> provides a wealth of data and insights on the
              business. Making sense of all of that data can be time consuming.
              We have therefore developed our own framework, to be able in a
              one-pager to see how the business is doing, and to take the right
              decisions:
            </p>

            <ul>
              <li>
                Sales KPIs: finding the right information on seller central,
                vendor central, or your other marketplaces - watching both sell
                in and sell out.
              </li>
              <li>
                Logistics KPIs: this information is hidden in different places,
                and requires attention to make sure you follow the right
                numbers.
              </li>
              <li>
                Advertising KPIs: advertising is obviously key to success, and a
                global picture has to be drawn including all the actions, as
                well as PPC and DSP, but also other advertising platforms
                (social media for instance).
              </li>
              <li>
                Key for account management: we use this tool on a weekly basis
                for the account we manage to provide the proper insights to our
                customers.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Sunstar
            </a>
          </figcaption>
          <Picture src="/images/Relevant KPIs.png" alt="" />
        </figure>
      </section>

      <section id="reporting_automation">
        <figure>
          <Picture src="/images/Reporting Automation.png" alt="" />
          <figcaption>
            <h3>Reporting automation</h3>

            <p>
              With our partner Reveals, we can build your reporting
              infrastructure through automation to give you full control on your
              complex eCommerce data. This technological-based solution will
              enhance your business to the next level.
            </p>

            <ul>
              <li>
                We will automate your reporting, through API or scraping, store
                and keep historical data.
              </li>
              <li>
                We will set up your tailor made “e-Cockpit” with dashboards and
                analytics: aggregating data from your different sources
                (marketplaces, advertising, social media...).
              </li>
              <li>
                Go to the next step: use machine learning to optimise your
                marketing actions, and results prediction.
              </li>
            </ul>

            <a href="reveals.html" className="cta">
              Learn more about Reveals
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="market_insights">
        <figure>
          <figcaption>
            <h3>Market insights</h3>

            <p>
              We have partnered with Profitero, a worldwide leader in market
              intelligence to provide our customers with relevant insights from
              competitors' shares, and market trends. You will specifically have
              access to:
            </p>

            <ul>
              <li>
                Views of your product portfolios and how they achieve compared
                to market.
              </li>
              <li>Insights on market shares and market dynamics.</li>
              <li>Specific dashboards on 1P and 3P sales data.</li>
            </ul>

            <a href="profitero.html" className="cta">
              Learn more about Profitero
            </a>
          </figcaption>
          <Picture src="/images/Market Insights.png" alt="" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
