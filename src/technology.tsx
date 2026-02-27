import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./team-page.scss";
import Hero, { entityClasses } from "./views/hero.tsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in long-page" entity={entityClasses.technology}>
      <h1 class="title">Technology</h1>
      <p>Bringing the post-dashboards future to retail brands</p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          <EComas /> Marketplace is your strategic growth partner, making
          <ECommerce /> simple for your brand. We support sustainable growth
          across platforms through clear strategy, market expansion support, and
          operational excellence, positioning ourselves as an end-to-end owner
          of clients’ <ECommerce /> performance.
        </p>
      </section>

      <section>
        <h3>Strategic development</h3>
        <p>
          <EComas /> Marketplace is your strategic growth partner, helping you
          grow across <ECommerce /> platforms through strong strategy, expert
          support, and operational excellence.
        </p>
        <ul>
          <li>
            We support your brand registration on Amazon and other marketplaces
          </li>
          <li>
            We develop your brand <ECommerce /> strategy, assessing your current
            <ECommerce /> setup and developing a tailored strategy for paid and
            organic growth
          </li>
          <li>
            We collaborate with you to create and manage a promotional calendar
          </li>
          <li>We provide recommendations on inventory planning</li>
          <li>We generate performance reports on aligned KPIs</li>
          <li>
            We collaborate strategically with internal team members to ensure
            alignment, transparency, and a strong operational bridge
          </li>
          <li>
            We provide an annual performance review to summarise your wins,
            lessons learned, forecasts, and an actionable roadmap for the next
            year.
          </li>
        </ul>
      </section>

      <section>
        <h3>Cataloguing and content management</h3>
        <p>
          <EComas /> Marketplace is your ideal partner for managing your product
          listings catalogue across all platforms.
        </p>
        <ul>
          <li>We upload new product listings</li>
          <li>We optimise listings for SEO, conversion and discoverability</li>
          <li>
            We provide ongoing catalogue management to maintain accuracy and
            relevancy
          </li>
          <li>
            We perform catalogue opportunities analysis to identify potential
            growth areas
          </li>
          <li>We create, revamp and improve your Brand Store</li>
          <li>We upload A+ Content and Brand Story uploads</li>
          <li>
            We perform content cleanups to rectify discrepancies and improve
            performance
          </li>
          <li>
            We provide an Annual Amazon Content Optimisation Strategy review
            based on seasonality, key events, and market opportunities including
            creative.
          </li>
        </ul>
      </section>

      <section>
        <h3>Advertising and retail media</h3>
        <p>
          We’re your growth partners, ensuring you connect with and convert your
          audience via fantastic advertising and dominance of retail media
          networks.
        </p>
        <ul>
          <li>
            We develop and execute comprehensive advertising strategies (PPC and
            DSP)
          </li>
          <li>
            We evaluate your existing campaigns to identify areas of improvement
          </li>
          <li>
            We provide daily campaign management and optimisation for
            cost-efficiency and results
          </li>
          <li>We manage your budget and track your advertising activities</li>
          <li>
            We provide weekly and monthly campaign reports with actionable
            insights
          </li>
          <li>
            We perform advanced audience targeting and retargeting using
            data-driven insights
          </li>
          <li>We monitor and manage your Share of Voice (SOV)</li>
          <li>We access your Amazon Marketing Cloud (AMC) reports.</li>
        </ul>
      </section>

      <section>
        <h3>Reporting</h3>
        <p>
          Comprehensive reporting and real insights make a huge difference to
          brands’ success in global growth. We’re your growth partners, ensuring
          you can read and use the data available.
        </p>
        <ul>
          <li>
            We give you full access to a Power BI dashboard with consolidated
            sales and advertising data
          </li>
          <li>
            We support ad hoc reporting, presentation decks, catalogue reviews
            and pricing analysis
          </li>
          <li>
            We track and analyse KPIs and performance metrics to uncover
            opportunities
          </li>
          <li>We provide monthly monitoring of the Voice of the Customer.</li>
        </ul>
      </section>

      <section>
        <h3>Troubleshooting (account health)</h3>
        <p>
          We’re your growth partners, offering full support on your accounts
          across all platforms. Our <EComas /> Marketplace team are fully
          trained to deal with problems as and when they arise.
        </p>
        <ul>
          <li>
            We manage each case, resolving issues with Amazon and other
            marketplaces
          </li>
          <li>
            We review your account performance daily, as well as notifications
            and account health
          </li>
          <li>
            We proactively troubleshoot to resolve account issues promptly
          </li>
          <li>We provide customer service to end consumers.</li>
        </ul>
      </section>
    </main>
    <section id="blog" class="blog">
      <h2>Our blog</h2>
      <p>
        Read our latest blogs for helpful <ECommerce /> tips and what's new in
        the Amazon world relating to expanding your brand internationally.
      </p>
      <div role="list">
        {"{% for post in site.tags.Technology | slice: 0, 3 %}"}
        <article>
          <a href="{{ post.url }}">
            <img
              src="{{ post.thumbnail }}"
              alt="{{ post.thumbnail_alt }}"
              loading="lazy"
            />
          </a>
          <h3>
            <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
          </h3>
          <p>{"{{ post.excerpt | escape }}"}</p>
          <a href="{{ post.url }}" class="cta">
            Read More
          </a>
        </article>
        {"{% endfor %}"}
      </div>
    </section>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
