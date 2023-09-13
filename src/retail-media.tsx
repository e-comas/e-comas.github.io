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
  faDownload,
  faPhone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ECommerce } from "./views/eWords.tsx";
import ListElement from "./views/ListElement.tsx";
import { faAmazon, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import { ecHoleInSquare } from "./utils/customIconDefinition.ts";

export default (
  <Body title="Retail Media">
    <Header />
    <Hero class="animate-in long-page">
      <h1 class="title">Online Retail Media</h1>
      <p>
        Whether you want to kickstart your retail media strategy or enhance an
        existing campaign, we can handle all aspects of your advertising to
        expand your reach and grow your sales.
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>

    <main id="main-content">
      <figure class="made-easy">
        <figcaption>
          <h3>Unlock your retail media success</h3>
          <p>
            An Amazon-verified partner and Google Ads-certified agency, we
            leverage the full capabilities of digital media platforms through
            our partnerships with Criteo and Citrus Ads. Our expert team helps
            you rock your campaigns and hit ambitious targets, focusing on the
            metrics that matter to take your brand to new heights.
            <br />
            We've successfully managed big advertising budgets and applied the
            latest media innovations to achieve impressive results for our
            clients. So, you’re in capable hands when it comes to driving
            campaigns and smashing goals.
            <br />
            Our team can also help you harness the power of search engines and
            social media sites (including Google, Facebook, Instagram, Twitter,
            LinkedIn and Bing) to put your products in front of the people most
            likely to buy them. Plus, build click-through traffic to boost your
            rankings.
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
          With the e-Comas team by your side, you’ll have a dedicated,
          proficient and certified partner who knows retail media inside and
          out.
        </p>
        <div role="list">
          <ListElement
            title="Strategy & Planning"
            desc="Our ad specialists forecast ad sales, total sales and budget based on your current campaign performance. No data? No problem! We’ll use benchmarks to plan your campaigns."
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="Amazon PPC"
            desc="Using the latest paid search strategies with a full funnel focus, we can help with an account audit, strategy, campaign setup and optimisation to drive growth and hit your targets."
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="Amazon DSP"
            desc="Get ahead with DSP to grow your customer funnel from outside of Amazon. Mixed with AMC reports and audience builds, we ensure we can target precise and refined audiences for your brand. "
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="AMC"
            desc="Our Amazon Marketing Cloud-certified professionals leverage deep insights and make informed decisions, amplifying your success. Whether it's creating custom dashboards or navigating the sea of data, we provide insights that can transform your strategy."
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="AMS"
            desc="We’ll help you maximize your advertising campaigns with real-time data from Amazon Marketing Stream to make the most of the high conversion hours of the day."
          />
          <ListElement
            icon={faAmazon as IconProp}
            title="Amazon Attribution"
            desc="Launch off-Amazon campaigns (Google Ads, Social Media Ads, email campaigns) to drive traffic to your Amazon listings – it’s great for organic ranking!"
          />
          <ListElement
            icon={faGoogle as IconProp}
            title={"Google Ads"}
            desc="We can define your Google Ads strategy and manage Search, Display and Shopping Ads. Our team can also set up everything you need to succeed, like Google Analytics and Google Tag Manager."
          />
          <ListElement
            icon={faUserGroup as IconProp}
            title={"Social Media Ads"}
            desc="Harnessing the power of social media sites, we help put your products in front of the people most likely to buy them, as well as building click-through traffic to boost your rankings."
          />
          <ListElement
            icon={ecHoleInSquare as IconProp}
            title={"Criteo & Citrus Ads"}
            desc="Let us audit your account, create a winning strategy and help you with your advertising campaign setup and optimisation to succeed on these two major retail media platforms. 
            Analytics"
          />
        </div>
        <a href="/contact.html" class="cta animatable">
          Book a Call
        </a>
      </ElementWithBackgroundImage>
    </main>
    <section class="how-we-do-it">
      <h2>How We Do It</h2>
      <p>
        We combine strategic planning, data analysis and hands-on operational
        work to help brands break into new and growing markets.
      </p>
      <div role="list">
        <FlipCard
          title="Define Strategy"
          desc={
            <>
              We audit of your brand’s current <ECommerce /> presence and work
              closely with you to set clear and measurable goals."
            </>
          }
        />
        <FlipCard
          title="Manage Operations"
          desc="From optimizing product listings to handling logistics and VAT, we can manage your account on multiple platforms."
        />
        <FlipCard
          title="Grow Traffic"
          desc="Whether it’s using Amazon PPC, DSP, Google or socials, we monitor and adjust your campaigns to maximize ROI."
        />
        <FlipCard
          title="Drive Conversion"
          desc="We use analytics tools to track key performance metrics, such as sales, traffic, conversion rates, and customer feedback."
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
        <Picture src={"/images/case-studies/miamily.png"} alt={""} />
        <figcaption>
          <h3>The social media strategy</h3>
          <p>
            If you’re selling on Amazon, your ad strategy doesn’t need to be
            limited to Amazon. Download our success story to learn how we helped
            Swiss baby brand MiaMily interweave its social media and advertising
            to enhance its brand presence and grow its sales.
          </p>
          <a class="cta" href="TODO">
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
        relating to online retail media.
      </p>
      <div role="list">
        {"{% for post in site.tags.Advertising | slice: 0, 3 %}"}
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
