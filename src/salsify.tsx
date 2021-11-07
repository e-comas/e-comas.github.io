import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import { ECommerce } from "./views/eWords.js";
import VideoEmbedLink from "./views/VideoEmbedLink.js";
import ElementWithIcon from "./utils/ElementWithIcon.js";
import Footer from "./views/Footer.js";

import "./salsify.scss";

export default (
  <Body title="Syndication with Salsify">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        World class expertise for <strong>PIM &amp; syndication</strong>
      </h2>

      <VideoEmbedLink
        tagName="div"
        previewImage="/images/Banner2 Video 3x .png"
        videoId="cnA-eu3aKpc"
      />

      <section>
        <figure>
          <figcaption>
            <h3>3 principles for winning on the digital shelf</h3>
            <p>
              Just like traditional retail, the digital shelf requires extreme
              focus and discipline to drive maximum growth and beat your
              competition. But the guiding principles to achieve that growth are
              different.
            </p>
            <ol>
              <li>
                <strong>Engage shoppers everywhere : </strong>
                Content has become your brand’s packaging on the digital shelf.
              </li>
              <li>
                <strong>Execute commerce strategies fast : </strong>
                New channels represent opportunities that may or may not work
                for your business. You must learn fast, scale what works, and
                stop what doesn’t.
              </li>
              <li>
                <strong>Be your customers' best partner : </strong>
                Delivering the content your retailers and distributors need
                makes you a partner they will prioritise, driving even more
                growth for your business.
              </li>
            </ol>
          </figcaption>
          <VideoEmbedLink
            tagName="div"
            previewImage="/images/Banner2 Video 3x .png"
            videoId="VZ5I8A6V4mE"
          />
        </figure>
      </section>

      <section>
        <figure>
          <img src="/images/ECOM_SCHEMA_1.svg" alt="Grow in retail" />
          <figcaption>
            <h3>Our partnership with Salsify</h3>
            <p>
              Salsify can optimise your PIM, fully operationalising your product
              content so that you can act quickly on data-driven insights,
              evolving your business and engaging your customers.
            </p>
            {/* Insert graphic here */}
            <p>
              We can implement Salsify on your behalf to organise your content
              and upload it to all marketplaces. Our team of experts can also
              help you manage your day-to-day business activities on Salsify.
            </p>
          </figcaption>
        </figure>
      </section>

      <ol class="grow-in-retail">
        <li>
          <strong>Fractured</strong>
          <p>
            Product Content is in-house, bespoke, (xls and ERP) and has no clear
            ownership.
          </p>
        </li>

        <li>
          <strong>Activated</strong>
          <p>
            Foundational product content is easily managed and is accurately and
            successfully activated on the digital shelf.
          </p>
        </li>

        <li>
          <strong>Enhanced</strong>
          <p>
            Product experiences are enhanced with rich content that yield
            improved engagement and ROI.
          </p>
        </li>

        <li>
          <strong>Managed</strong>
          <p>
            The PXM capability is fully implemented, and actively leveraged for
            omnichannel product experiences.
          </p>
        </li>

        <li>
          <strong>Optimized</strong>
          <p>
            The PXM program is fully operationalized across business units and
            data-driven decisions from analytics and insights are quickly acted
            on - fostered through a business culture focused on experimentation
            and continuous improvement.
          </p>
        </li>
      </ol>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
