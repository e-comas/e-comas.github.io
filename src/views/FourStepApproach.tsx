import { h } from "@aduh95/async-jsx";

import "./FourStepApproach.scss";

export default () => (
  <section class="four-step">
    <h2>Our 4-step approach</h2>

    <div>
      <img src="/images/chess.svg" alt="Chess knight" />
      <h3>Stategy</h3>
      <ul>
        <li>Consumer Prices volatility.</li>
        <li>Lost Buy Box rates (prices lower from other selling parties).</li>
        <li>
          Insights and sentiments analysis on customer reviews and questions.
        </li>
      </ul>
      <p>
        –&gt; To check how your distribution is working and how the customer
        perceive your brand and products.
      </p>
      <a href="/" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/euro-cog.svg" alt="Cog" />
      <h3>Operation</h3>
      <ul>
        <li>Out Of Stock occurrences.</li>
        <li>Logistics Performance (chargebacks, customer satisfaction).</li>
        <li>Customer support performance and answer to questions.</li>
      </ul>
      <p>
        –&gt; To check if your operations performance is able to support your
        growth.
      </p>
      <a href="/" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/directions.svg" alt="Directions" />
      <h3>Conversion</h3>
      <ul>
        <li>IDQ (Intelligent Data Quality) Review.</li>
        <li>Study of conversion rates of your products on Amazon.</li>
        <li>Benchmark to conversion rates from category.</li>
      </ul>
      <p>
        –&gt; To check if the content on your product pages is cinvincing to
        your target audience.
      </p>
      <a href="/" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/search.svg" alt="SEO" />
      <h3>Traffic</h3>
      <ul>
        <li>Review of your advertising campaigns.</li>
        <li>Audit of the keywords, of the aCoS and TaCoS.</li>
        <li>Other promotion activities review.</li>
      </ul>
      <p>
        –&gt; To check if you are spending your advertisng budget wisely and in
        the most efficient way.
      </p>
      <a href="/" class="cta">
        Read more
      </a>
    </div>
  </section>
);
