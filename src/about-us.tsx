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
        It’s no secret: selling on Amazon and other online marketplaces can be
        tricky. we help brands grow faster box – can be an image background with
        the text
      </p>
      <a href="./contact.html" class="cta">
        Book a Call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <Breadcrumbs />
    <main id="main-content">
      <figure class="how_it">
        <Picture
          src="/images/team-picture-EU.jpg"
          alt="e-Comas Europe team picture"
        />
        <figcaption>
          <h3>About us</h3>
          <h2>How it started</h2>
          <p>
            <EComas /> – <ECommerce /> Made Simple was founded by Jérôme de
            Guigné in 2013, with the simple idea of helping brands sell products
            online. We quickly realised companies were struggling with
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
          <h3>About us</h3>
          <h2>How it's going</h2>
          <p>
            Today our experts coach brands and handle their accounts to
            sustainably grow their business and improve their agility in
            tackling everyday challenges with online retail. Working across
            Amazon, Shopify, CDiscount, Veepee, Bol, Walmart and more, we get
            you set up, we scale your business and make it profitable, handling
            your account, content and advertising.
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
          Our international teams of ex-brand directors, ex-Amazonians and
          operational experts help ambitious brands grow on Amazon and other
          online marketplaces.
        </p>
        <div role="list">
          <ListElement
            title={"Global expansion"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Discover more
            </a>
          </ListElement>
          <ListElement
            title={"Retail Media"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Discover more
            </a>
          </ListElement>
          <ListElement
            title={"Data & Technology"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            icon={faGem as IconProp}
            centered={false}
            invertSVG={true}
          >
            <a class="cta animate-once" href="TODO">
              Discover more
            </a>
          </ListElement>
        </div>
      </section>
      <Partners title="Our partners">
        <p>
          <EComas /> is proud to work with brilliant partners across the{" "}
          <ECommerce /> space, including
        </p>
      </Partners>
      <section id="get_to_know" class="section">
        <h2>Get To Know Us</h2>
        <p>
          Some of the known industry stalwarts with proven experience have come
          together to form team: e-Comas was born. Our team’s passion helps your
          business grow by coaching you in Amazon’s Key Success Factors. Our
          team comprises ex-brand directors, ex-Amazonians, and operational
          experts to help you grow on Amazon.
        </p>
        <div role="list">
          <ListElement
            title={"Mission"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            icon={faChartPie as IconProp}
            centered={false}
            invertSVG={true}
          />
          <ListElement
            title={"Data & Technology"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            icon={faEye as IconProp}
            centered={false}
            invertSVG={true}
          />
          <ListElement
            title={"Data & Technology"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
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
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
