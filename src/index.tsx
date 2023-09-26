import { h, Fragment } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Hero from "./views/hero.tsx";
import Footer from "./views/Footer.tsx";
import Testimonies from "./views/Testimonies.tsx";
import AboutUs from "./views/about-us.tsx";
import Partners from "./views/Partners.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";
import AnimatedFigure from "./views/AnimatedFigure.tsx";
import VideoEmbedLink from "./views/VideoEmbedLink.tsx";
import OurServices from "./views/OurServices.tsx";
import Picture from "./utils/Picture.tsx";

import "./index.scss";
import TeamCertifications from "./views/TeamCertifications.tsx";

import "./views/animate-in.scss";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

import "runtime:./views/animate-in.ts";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Newsletter from "./views/newsletter.tsx";

export default (
  <Body>
    <Header />
    <main id="main-content">
      <figure class="intro animate in">
        <figcaption>
          <h5>The boutique agency you need to thrive on</h5>
          <img src="/images/partners/anim.svg"></img>
          <p>
            Skyrocket your success and grow your brand with proven global
            expansion strategies, winning media campaigns and powerful
            technology. <EComas /> is the full service <ECommerce /> agency to
            help you get there.
          </p>
          <a href="/contact.html" class="cta">
            Let's talk
          </a>
        </figcaption>
        <div>
          <img src="/images/Earth.svg" />
          <a
            href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.cj3vydv54i8qcb80mhstj0em0/"
            target="_blank"
            rel="noopener"
            role="listitem"
          >
            <Picture
              src="/images/certifications/Verified partner badge.png"
              alt="Amazon Ads Verified Partner badge"
            />
          </a>
        </div>
      </figure>

      <div class="video-container">
        <VideoEmbedLink
          tagName="div"
          previewImage="/images/team-picture-EU.jpg"
          videoId="vjGxQNji05U"
        />
      </div>
      <OurServices />
      <Partners title="our clients" class="clients">
        <p>
          We are super proud to have worked with ambitious brands from across
          the world:
        </p>
        <div role="list">
          <a role="listitem" href="https://about.mattel.com/">
            <Picture
              src={"/images/brands/clients/Mattell Logo.png"}
              alt={"Mattel"}
            />
          </a>{" "}
          <a role="listitem" href="https://www.kao.com">
            <Picture src={"/images/brands/clients/KAO.png"} alt={"KAO"} />
          </a>
          <a role="listitem" href="https://miamily.com/">
            <Picture
              src={"/images/brands/clients/miamily logo box dark purple.png"}
              alt={"Miamily"}
            />
          </a>
          <a role="listitem" href="https://www.michelin.com/">
            <Picture
              src={"/images/brands/clients/Michelin Logo.png"}
              alt={"Michelin"}
            />
          </a>
          <a role="listitem" href="https://realshades.com/">
            <Picture
              src={"/images/brands/clients/logo_RS.png"}
              alt={"Real Shades"}
            />
          </a>
        </div>
        <a href="/about-us.html#clients" class="cta">
          See more
        </a>
      </Partners>
      {/* <hr /> */}
      <Partners>
        <p>
          We work with the best partners to help you grow your eCommerce
          business.
        </p>
        <div role="list">
          <a role="listitem" href="salsify.html">
            <img alt="Salsify" src="/images/partners/salsify.svg" />
          </a>
          <a role="listitem" href="website-creation.html#Shopify">
            <img alt="Shopify" src="/images/partners/shopify.svg" />
          </a>
          <a role="listitem" href="partners.html#pacvue">
            <img alt="Profitero" src="/images/partners/pacvue.svg" />
          </a>
          <a role="listitem" href="partners.html#channelEngine">
            <img alt="Reveals" src="/images/partners/ChannelEngine.svg" />
          </a>
          <a role="listitem" href="partners.html#amazonAds">
            <img alt="Reveals" src="/images/partners/Amazon ADS.svg" />
          </a>
        </div>
        <a href="partners.html" class="cta">
          See more
        </a>
      </Partners>
      <AboutUs />
      {/* <section class="fourSeventhThreeSeventh">
        <Picture src="/images/Banner3.1 Testimonials 3x .png" alt="" />
        <Picture src="/images/Banner3.2 Testimonials 3x .png" alt="" />
      </section> */}
      <Testimonies withBlock />
      <figure class="papers" id="FreePaper">
        <figcaption>
          <strong>Free White Paper</strong>
          <h2> How to manage Amazon</h2>
          <p>
            Here’s our beginner’s guide to building a solid Amazon strategy,
            managing your operations, creating content and growing traffic.
          </p>
          <a
            href="//go.e-comas.com/l/885733/2022-09-02/bwmm8"
            className="cta open-in-modal no-arrow"
          >
            Download <FontAwesomeIcon icon={faDownload as IconProp} />
          </a>
        </figcaption>
        <Picture src={"/images/team-picture-EU.jpg"} alt={"eComas Team"} />
      </figure>

      {/* <ElementWithBackgroundImage
        tagName="section"
        src="/images/Banner6 3x .png"
        class="key-figures"
      >
        <p>
          <AnimatedFigure tagName="strong" countTo={125_000} />
          <span>listing managed</span>
        </p>
        <p>
          <AnimatedFigure tagName="strong" countTo={1_000} />
          <span>vendor &amp; seller accounts opened/managed</span>
        </p>
        <p>
          <AnimatedFigure tagName="strong" countTo={2_500_000} currency="EUR" />
          <span>advertising campaigns handled</span>
        </p>
      </ElementWithBackgroundImage> */}
      <TeamCertifications />
      <Newsletter />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
