import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Picture from "./utils/Picture.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";
import Footer from "./views/Footer.tsx";

import "./about-us.scss";
import Hero from "./views/hero.tsx";
import ListElement from "./views/ListElement.tsx";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChartPie,
  faEye,
  faGem,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Partners from "./views/Partners.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import "runtime:./views/animate-on-view.ts";

export default (
  <Body title="About eComas">
    <Header />
    <Hero class="animate-in">
      <h5 class="title">
        We make <ECommerce /> simple
      </h5>
      <p>
        It's no secret: selling online can be tricky. That's why, for over 10
        years, we've been helping brands tackle seemingly "unmanageable"
        challenges (hello, Amazon!) by breaking them down into smaller, more
        manageable pieces to help you grow faster in <ECommerce />.
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    {/* <Breadcrumbs /> */}
    <main id="main-content">
      <figure class="how_it">
        <Picture
          src="/images/team-picture-EU.jpg"
          alt="e-Comas Europe team picture"
        />
        <figcaption>
          {/* <h3>About us</h3> */}
          <h2>How it started</h2>
          <p>
            <EComas /> – <ECommerce /> Made Simple was founded by Jérôme de
            Guigné in 2013, with the simple idea of helping brands sell products
            online. We quickly realized companies were struggling with
            establishing profitable and sustainable <ECommerce /> strategies.
            That’s when ‘Amazon Made Simple’ was born, which later became ‘
            <ECommerce /> Made Simple’ –
            <EComas />.
          </p>
        </figcaption>
      </figure>
      <figure class="how_it going">
        <Picture
          src="/images/team-picture-EU.jpg"
          alt="e-Comas Europe team picture"
        />
        <figcaption>
          {/* <h3>About us</h3> */}
          <h2>How it's going</h2>
          <p>
            Today our experts coach brands and handle their accounts to
            sustainably grow their business and improve their agility in
            tackling everyday challenges with online retail. Working across
            Amazon, Shopify, CDiscount, Veepee, Bol, Walmart and more, we scale
            your business and make it profitable by combining global expansion,
            retail media and data technology to create winning strategies that
            help you shine in online retail.
            <br />
            Put simply, we help brands grow faster on <ECommerce /> – globally,
            quickly, across multiple online channels!
          </p>
        </figcaption>
      </figure>
      {/* <a href="/our-team.html" className="cta">
        Meet our team
      </a>
      <a href="/testimonials.html" className="cta">
        Read our clients' testimonials
      </a> */}
      <section class="section green">
        <h2>
          Global full service <ECommerce /> agency
        </h2>
        <p>
          We make eCommerce simple with three pillars of full-service account
          management to power your brand’s global growth across all major online
          marketplaces.
        </p>
        <div role="list">
          <ListElement
            title={"Global expansion"}
            desc={
              "Our experts have successfully built brands for over a decade on Amazon and beyond. We speak the local languages and have strong partnerships with key eCommerce players to drive your business forward globally.              "
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Learn more
            </a>
          </ListElement>
          <ListElement
            title={"Retail Media"}
            desc={
              "We’re an Amazon-verified partner and Google Ads-certified agency, handling your advertising campaigns and leveraging the full capabilities of digital media platforms to expand your reach and grow your sales."
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Learn more
            </a>
          </ListElement>
          <ListElement
            title={"Data & Technology"}
            desc={
              "Get better visibility over your business and make growth-fuelling data-driven decisions with the latest tech, which automates processes and gives you a holistic view of customer habits, major trends and more."
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Learn more
            </a>
          </ListElement>
        </div>
      </section>
      <Partners title="Some of our clients">
        <p>
          We work with major multinational brands to develop strong{" "}
          <ECommerce /> strategies worldwide.
        </p>
      </Partners>
      <section id="get_to_know" class="section">
        <h2>Get To Know Us</h2>
        <p>
          We're a friendly bunch who love getting creative to solve problems in
          unique ways. Our passion lies in helping our clients harness the power
          of <ECommerce />, driving innovation and growth in the ever-evolving
          digital landscape. And we work closely with you, taking the time to
          understand your needs and tailoring our approach.
        </p>
        <div role="list">
          <ListElement
            title={"Our Mission"}
            desc={
              "To help brands thrive on the world's top online marketplaces, coaching you in the key success factors of eCommerce."
            }
            icon={faChartPie as IconProp}
            centered={false}
            invertSVG={true}
          />
          <ListElement
            title={"Our Vision"}
            desc={
              "To be the most customer-centric eCommerce global agency in North America and Europe."
            }
            icon={faEye as IconProp}
            centered={false}
            invertSVG={true}
          />
          <ListElement
            title={"Our Values"}
            desc={
              "Entrepreneurship, Benevolence, Dedication, Optimism, and Integrity"
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          />
        </div>
        <a href="TODO" class="cta">
          {" "}
          Meet Our team
        </a>
      </section>
      {/* <figure id="line-EC">
        <img src="/images/line-EC-WIP.svg" />
      </figure> */}
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
