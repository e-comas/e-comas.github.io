import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

export default (
  <Body title="EXPERIENCE > FIGURES > TESTIMONIALS > BLOGS">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Experience</h2>

        <p>
          We have many years of <strong>ecommerce experience</strong> between
          our amazing 45-strong team, and it comes from{" "}
          <strong>all the right places</strong> – Amazon and other platforms,
          brand owners and trade specialists.
        </p>

        <p>
          We&#39;ve helped many brands, big and small, grow their online
          presence and <strong>increase their sales</strong> through Amazon and
          other ecommerce platforms. Don&#39;t just take our word for it – see
          our <strong>stats</strong> and <strong>testimonials</strong> from
          happy customers.
        </p>
      </section>

      <section>
        <h2>Figures</h2>
        <h5>The numbers speak for themselves...</h5>

        <ul>
          <li>
            We can increase sales by <strong>5 times</strong> within 2 years …
            Sometimes up to <strong>10 times</strong> in 2 years.
          </li>
          <li>We can reduce operational costs by <strong>50%</strong>.</li>
          <li>We&#39;ve managed <strong>+100,000</strong> listings.</li>
          <li>We&#39;ve opened <strong>+500</strong> Vendor/Seller accounts.</li>
          <li>We&#39;ve handled <strong>+€1,000,000</strong> in advertising campaigns.</li>
        </ul>

        <br />

        <h5>Some more stats...</h5>

        <ul>
          <li>
            eCommerce retail sales are forecast to grow to{" "}
            <strong>$3.4 trillion</strong> by 2025 (Forbes).
          </li>
          <li>
            US retail m-commerce sales grew <strong>41.4%</strong> in 2020 and
            will grow another <strong>15.2%</strong> in 2021, to reach{" "}
            <strong>$359.32 billion</strong>. Annual sales should nearly{" "}
            <strong>double</strong> between now and 2025 (
            <a href="http://www.emarketer.com">www.emarketer.com</a>).
          </li>
          <li>
            By 2023, there will be <strong>5.3 billion</strong> total internet
            users - <strong>66%</strong> of the global population (
            <a href="http://www.cisco.com">www.cisco.com</a>).
          </li>
          <li>
            Consumer attention span is a maximum of <strong>8 seconds!</strong>{" "}
            (<a href="https://ebusinessinstitute.com/">www.ebusinessinstitute.com</a>).
          </li>
        </ul>
      </section>

      <section>
        <h2>Testimonials</h2>

        <p>Here&#39;s what our customers say about us:</p>

        <a href="/testimonials.html" class="cta">
            The testimonies
        </a>
      </section>

      <section>
        <h2>Blog</h2>

        <p>
          You can learn from our expertise for free! We do webinars, podcasts,
          articles and useful little videos on social media.{" "}
        </p>

        <p>
          Our blogs are full of our ecommerce wisdom and tips – find out
          something new today!
        </p>

        <a href="/news.html" class="cta">
          Latest blogs
        </a>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
