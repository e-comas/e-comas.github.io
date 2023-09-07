import { h } from "@aduh95/async-jsx";

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

export default (
  <Body>
    <Header />
    <main id="main-content">
      <Hero class="animate in">
        <h5>The boutique agency you need to thrive on</h5>
        <img src="/images/partners/anim.svg"></img>
        <p>
          Skyrocket your success and grow your brand with proven global
          expansion strategies, winning media campaigns and powerful technology.{" "}
          <EComas />, is the <em>full</em> service <ECommerce /> agency to help
          you get there.
        </p>
        <a href="/contact.html" class="cta">
          Let's talk
        </a>
      </Hero>
      <div class="video-container">
        <VideoEmbedLink
          tagName="div"
          previewImage="/images/team-picture-EU.jpg"
          videoId="vjGxQNji05U"
        />
      </div>
      <OurServices />
      <Partners>
        <p>
          We work with the best partners to help you grow your eCommerce
          business.
        </p>
      </Partners>
      <AboutUs />
      <section class="fourSeventhThreeSeventh">
        <Picture src="/images/Banner3.1 Testimonials 3x .png" alt="" />
        <Picture src="/images/Banner3.2 Testimonials 3x .png" alt="" />
      </section>
      <Testimonies withBlock />
      <section class="papers" id="FreePaper">
        <h2>Free White Paper</h2>
        <strong> How to manage Amazon</strong>
        <p>
          Here’s our beginner’s guide to building a solid Amazon strategy,
          managing your operations, creating content and growing traffic.
        </p>
        <a href="//go.e-comas.com/l/885733/2022-09-02/bwmm8" className="cta open-in-modal">
          Download <FontAwesomeIcon icon={faDownload as IconProp} />
        </a>
      </section>

      <ElementWithBackgroundImage
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
      </ElementWithBackgroundImage>
      <TeamCertifications />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
