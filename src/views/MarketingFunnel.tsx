import { h } from "@aduh95/async-jsx";

import MarketingFunnelIllustration from "./MarketingFunnelIllustration.js";

import "./MarketingFunnel.scss";

const Amazon = () => <img src="/images/partners/amazon.svg" alt="Amazon" />;

export default () => (
  <section id="marketing_funnel">
    <h3>
      Our <strong>marketing</strong> funnel
    </h3>
    <figure>
      <MarketingFunnelIllustration />
      <figcaption>
        <table>
          <thead>
            <tr>
              <th>
                On <Amazon />
              </th>
              <th>
                Off <Amazon />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Amazon Video</strong> on Amazon Prime, Fire tablets.
              </td>
              <td>
                <strong>Facebook Ads</strong> generating brand awareness.
              </td>
            </tr>
            <tr>
              <td>
                <strong>DSPP Remarking</strong> converting undecided shoppers
                who are considering your products.
              </td>
              <td>
                <strong>Google Ads</strong> start of the customer journey with
                Google Search.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sponsored Brands</strong> drive consideration and sales
                with customers searching for your products or similar ones.
              </td>
              <td>
                <strong>Google Shopping</strong> generating brand awareness.
              </td>
            </tr>
          </tbody>
        </table>
      </figcaption>
    </figure>

    <h3>
      Our <strong>approach</strong> to ads on Amazon
    </h3>

    <ol>
      <li>
        <img src="/images/ads-on-amazon/1.svg" alt="" aria-hidden="true" />
        <div>
          <strong>Define your strategy</strong>
          Is your target brand awareness or sales focused? What are your KPIs
          (ROAS or Impressions)?
        </div>
      </li>
      <li>
        <img src="/images/ads-on-amazon/2.svg" alt="" aria-hidden="true" />
        <div>
          <strong>Campaign set up</strong>
          Create the different campaigns following the strategy and the
          automated then manual campaigns process.
        </div>
      </li>
      <li>
        <img src="/images/ads-on-amazon/3.svg" alt="" aria-hidden="true" />
        <div>
          <strong>Budget allocation</strong>
          Revisit the performance on the category and campaign levels to
          re-allocate budget according to your goals (ROAS or Impression).
        </div>
      </li>
      <li>
        <img src="/images/ads-on-amazon/4.svg" alt="" aria-hidden="true" />
        <div>
          <strong>Review results</strong>
          Are you meeting your targets? Learn and adapt your strategy. Should
          you go on DSP? On Social Advertising?
        </div>
      </li>
      <li>
        <img
          src="/images/ads-on-amazon/5-optimisation.svg"
          alt=""
          aria-hidden="true"
        />
        <div>
          <strong>Optimisation</strong>
          Optimise the ad campaigns at the campaign / product level according to
          the performance criteria.
        </div>
      </li>
    </ol>
  </section>
);
