import { h } from "@aduh95/async-jsx";

import "./FourStepApproach.scss";

export default () => (
  <section class="four-step">
    <h2>Our 4-step approach</h2>

    <div>
      <img src="/images/chess.svg" alt="Chess knight" />
      <h3>
        Define <strong>strategy</strong>
      </h3>
      <ul>
        <li>
          We can <strong>audit</strong> your business's current success on
          Amazon.
        </li>
        <li>
          We can provide <strong>training</strong> to you and your team.
        </li>
        <li>
          We can <strong>research</strong> your market and competitors.
        </li>
      </ul>
      <a href="/strategy.html" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/euro-cog.svg" alt="Cog" />
      <h3>
        Manage <strong>operations</strong>
      </h3>
      <ul>
        <li>
          We can <strong>manage your account</strong> on multiple ecommerce
          platforms.
        </li>
        <li>
          We cover Amazon in the Americas, Europe and Asia, Shopify, CDiscount,
          Veepee, Bol, Walmart, and more.
        </li>
        <li>
          We can help you with <strong>logistics</strong> and VAT.
        </li>
      </ul>
      <a href="/operations.html" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/directions.svg" alt="Directions" />
      <h3>
        Drive <strong>conversion</strong>
      </h3>
      <ul>
        <li>
          We can help you <strong>create</strong> outstanding listings.
        </li>
        <li>
          We can <strong>manage</strong> your product information.
        </li>
        <li>
          We can <strong>globalise</strong> your listings content.
        </li>
      </ul>
      <a href="/conversion.html" class="cta">
        Read more
      </a>
    </div>
    <div>
      <img src="/images/search.svg" alt="SEO" />
      <h3>
        Grow <strong>traffic</strong>
      </h3>
      <ul>
        <li>
          We can manage your <strong>advertising</strong>.
        </li>
        <li>
          Whether it’s using PPC / Search, Amazon DSP / Programmatic, Google
          Search or Facebook and Instagram.
        </li>
        <li>
          We can help with <strong>social media</strong> campaigns.
        </li>
      </ul>
      <a href="/traffic.html" class="cta">
        Read more
      </a>
    </div>
  </section>
);
