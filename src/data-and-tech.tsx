import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";
import Hero from "./views/hero.tsx";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import Picture from "./utils/Picture.tsx";
import FlipCard from "./views/flipCard.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faBrain,
  faCogs,
  faDownload,
  faPhone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ECommerce } from "./views/eWords.tsx";
import ListElement from "./views/ListElement.tsx";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import { ecData, ecHoleInSquare } from "./utils/customIconDefinition.ts";
import { faCompass, faEye, faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default (
  <Body title="Data & Technology">
    <Header />
    <Hero class="animate-in long-page">
      <h1 class="title">Data & Technology</h1>
      <p>
        Cut the guesswork and navigate the complexities of big <ECommerce />{" "}
        data with our expertise and the latest technology to steer your brand to
        success.
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>

    <main id="main-content">
      <figure class="made-easy">
        <figcaption>
          <h3>Maximize performance with data & tech</h3>
          <p>
            Get better visibility over your business and make data-driven
            decisions that propel growth and success with e-Comas. Our
            custom-built reporting tool, Compas, collates all your sales,
            advertising, and product information in a single place. So, you can
            easily see the big picture of your business and understand how
            different aspects impact your sales.
            <br />
            Supported by our expert analysts, our unique frameworks and
            sophisticated intelligence tools decode your reams of <ECommerce />
            data, helping you to make the right business decisions quickly and
            confidently.
            <br />
            But that’s not all. We're all about using technology wisely to get
            the best results. That's why we team up with the top platforms out
            there. We gather data from various sources and use automation tools
            to bring you maximum value. It's tech-savvy awesomeness that
            streamlines processes and saves you tons of time.
          </p>
        </figcaption>
        <Picture src="/images/discussion.jpg" alt="" />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/Ecomma-b2.jpg"
        class="about-us"
      >
        <h3>Our Expertise</h3>
        <p>
          Tap into the power of your big data analytics and make better business
          decisions with our seasoned experts and powerful technology.
        </p>
        <div role="list">
          <ListElement
            icon={faBrain as IconProp}
            title="Market Intelligence"
            desc="With insights from our analytics, you'll be ready to make informed decisions and propel your business forward. We analyse your total addressable market, track competitor performances and decode search demands to give you a clearer picture of where you stand."
          />
          <ListElement
            icon={faEye as IconProp}
            title="Advanced Forecasting"
            desc="Our team anticipates future trends using state-of-the-art analytics, allowing you to plan confidently. Stay ahead of the curve, optimise your inventory and secure your financial future by harnessing the power of data-driven insights for robust and reliable forecasting."
          />
          <ListElement
            icon={ecData as IconProp}
            title="Data Strategy"
            desc="We begin by evaluating your existing data infrastructure aligning it with strategic KPIs tailored to your specific market and brand goals. Our team provides forecasting assistance, using analytics to drive informed decision-making, resulting in robust P&L development."
          />
          <ListElement
            icon={faCogs as IconProp}
            title="Training"
            desc={
              <>
                Using our unique COMAINDE framework (Collection, Management,
                Insights, Decisions), we provide tailored training to enhance
                your team's ability to understand and use <ECommerce /> data.
                This specialized approach empowers you to make data-driven
                decisions, leveraging key insights to gain a competitive edge in
                the market."
              </>
            }
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="Custom BI Development"
            desc={
              <>
                With access to over 100 data sources, including Amazon, Shopify,
                and various ad platforms, we build your dream dashboard to
                display <ECommerce /> performance across channels. Our ability
                to consolidate this data enables a true Marketing Efficiency
                Ratio (MER), offering actionable insights."
              </>
            }
          />
          <ListElement
            icon={faCompass as IconProp}
            title="Compas Dashboard"
            desc="Tailored for brands selling on Amazon and wanting to track efficiency and attribution across multiple other channels (Google Ads, Facebook Ads, TikTok Ads), we’ve created the Compas dashboard, which helps brands navigate the Amazon landscape with precision and agility."
          />
          <ListElement
            icon={faAmazon as IconProp}
            title={"Amazon Marketing Cloud"}
            desc="Our experts specialize in running tailored queries to answer your most pressing Amazon Marketing Cloud questions. With us by your side, leverage deep insights and make informed decisions, amplifying your brand's success on Amazon."
          />
          <ListElement
            icon={faUserGroup as IconProp}
            title={"Salsify"}
            desc="Partner with us and harness the full capabilities of Salsify, making PIM more streamlined and effective for your business. Our team not only assists with the day-to-day tasks of using Salsify but also expertly integrates new features tailored to your instance."
          />
          <ListElement
            icon={faNewspaper as IconProp}
            title={"D2C Website Development"}
            desc={
              <>
                We craft tailored <ECommerce /> sites leveraging top platforms
                like Shopify and WooCommerce. Our team of expert developers
                ensures your website not only looks stunning but also functions
                flawlessly, creating a seamless shopping experience for
                customers.
              </>
            }
          />
        </div>
        <a href="/contact.html" class="cta animatable">
          Book a Call
        </a>
      </ElementWithBackgroundImage>
    </main>
    <section class="how-we-do-it">
      <h2>The benefits</h2>
      <p>
        Future-proof your <ECommerce /> business with a data-driven strategy
        that helps you make smarter and faster decisions based on the facts.
      </p>
      <div role="list">
        <FlipCard
          title="Know your customers"
          desc="Get a deeper understanding of your customers and identify trends to tailor your marketing efforts to specific demands."
        />
        <FlipCard
          title="Competitive advantage"
          desc="Respond more quickly to market changes, adapt to customer preferences and outperform the competition."
        />
        <FlipCard
          title="Informed decision-making"
          desc="The numbers don’t lie. Make smarter business choices based on concrete evidence rather than relying on gut feeling."
        />
        <FlipCard
          title="Optimize your budgets"
          desc="Allocate resources to the most effective marketing channels and optimize your advertising spend to maximize return on investment."
        />
      </div>
    </section>
    <section class="see-the-results">
      <h2>See The Results</h2>
      {/* <p>
        Don’t take our word for it – find out how we helped a British brand
        launch in all the European marketplaces and the USA.
      </p> */}
      <figure>
        <Picture src={"/images/case-studies/michelin.png"} alt={""} />
        <figcaption>
          <h3>Saving time through upload automation</h3>
          <p>
            When you have thousands of product listings, you need a robust
            solution for content management and upload. Here’s how we and our
            partners at Salsify helped a leading tyres brand save time and
            improve consistency.
          </p>
          <a class="cta" href="https://go.e-comas.com/l/885733/2022-09-02/bwml5">
            Download
            <FontAwesomeIcon icon={faDownload as IconProp} />
          </a>
        </figcaption>
      </figure>
    </section>
    <section class="blog" id="blog">
      <h2>Blog</h2>
      <p>
        Find out useful <ECommerce /> tips and what's new in the Amazon world
        relating to data and technology.
      </p>
      <div role="list">
        {/* TODO: is it the right tag for this page? */}
        {"{% for post in site.tags.Tools | slice: 0, 3 %}"}
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
