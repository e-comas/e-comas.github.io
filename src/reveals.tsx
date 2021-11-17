import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import SlidingText from "./views/SlidingText.js";
import HoverableMenu from "./views/HoverableMenu.js";
import { ECockpits } from "./views/eWords.js";
import Footer from "./views/Footer.js";
import DataRetrieval from "./views/DataRetrieval.js";

import "./classic-page.scss";

export default (
  <Body title="Analytics">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        Reveals: the next step of your <strong>analytics</strong> automation
        &amp; <strong>insights</strong>
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We automate <strong>data retrieval</strong> from the Internet.
        </SlidingText>
        <SlidingText>
          We setup{" "}
          <strong>
            tailor made <ECockpits />
          </strong>{" "}
          to oversight your business.
        </SlidingText>
        <SlidingText>
          We implement <strong>AI powered insights</strong> to support your
          growth.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Data Retrieval.png"
        >
          <h3>Data retrieval</h3>
          <p>
            We can automate the retrieval of your needed data from the Internet,
            consolidating it in one single place for your reporting.
          </p>
          <p>
            <a href="#data_retrieval">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Tailer Made E-cockpits.png"
        >
          <h3>
            Tailor made <ECockpits />
          </h3>
          <p>
            We setup your “<ECockpits />
            ”, with dashboarding &amp; Analytics:
            <br />
            We develop the rights KPIs and right views to foster business
            overseeing, enabling a dynamic deep-dive into details when
            necessary.
          </p>
          <p>
            <a href="#tailor_made_e-cockpits">Read further</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/AI Powered Predictions.png"
        >
          <h3>AI powered insights</h3>
          <p>
            Enhance your “data driven” approach: we leverage Artificial
            Intelligence to reveal from your data additional insights to
            strengthen your business.
          </p>
          <p>
            <a href="#ai-powered_predictions">Read further</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <section id="data_retrieval">
        <figure>
          <figcaption>
            <h3>Data retrieval</h3>

            <p>
              We build end-to-end “data pipelines”, dedicated to enhancing
              business exploitation of massive amounts of data.
            </p>

            <ul>
              <li>
                Secured automation of data extractions from your accounts and
                from the web,
              </li>
              <li>
                Structuration of useful information for your exploitation,
              </li>
              <li>Storage of historical data,</li>
              <li>Allow the plug of API, easy queries, professional tools.</li>
            </ul>

            <DataRetrieval />
          </figcaption>
          <Picture src="/images/Data Retrieval.png" alt="" />
        </figure>
      </section>

      <section id="tailor_made_e-cockpits">
        <figure>
          <Picture src="/images/Tailer Made E-cockpits.png" alt="" />
          <figcaption>
            <h3>
              Tailor made <ECockpits />
            </h3>

            <p>
              Reveals and e-Comas have an e-Cockpit solution, to offer the
              expertise in eCommerce as well as a technical approach, to provide
              a highly functional and insightful solution, which can be tailor
              made for you, and integrate all the platforms you work with:
            </p>

            <ul>
              <li>
                Full dashboards, build aggregated, with comprehensive KPIs.
              </li>
              <li>
                Enabling interactive data drill-down, global-details navigation,
                multi dimensional analysis.
              </li>
              <li>
                Create your own views, to monitor key points for your business.
              </li>
            </ul>
          </figcaption>
        </figure>
      </section>

      <section id="ai-powered_predictions">
        <figure>
          <figcaption>
            <h3>AI Powered predictions</h3>

            <p>
              Leverage the power of data by using Artificial Intelligence to get
              to the next level in your business insights generation processes.
              Once the reporting is up and running, the data is stored, and all
              its history, and displayed in your e-Cockpit, you can know produce
              specific insights to guide your decision making:
            </p>

            <ul>
              <li>
                Convert client feedbacks into requested updates of your
                products.
              </li>
              <li>
                Leverage Machine Learning to optimise your commercial actions.
              </li>
              <li>Increase your prediction of results.</li>
            </ul>
          </figcaption>
          <Picture src="/images/AI Powered Predictions.png" alt="" />
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
