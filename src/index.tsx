import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Testimonies from "./views/Testimonies.js";
import Partners from "./views/Partners.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import { ECommerce } from "./views/eWords.js";
import AnimatedFigure from "./views/AnimatedFigure.js";
import VideoEmbedLink from "./views/VideoEmbedLink.js";
import FourStepApproach from "./views/FourStepApproach.js";
import Picture from "./utils/Picture.js";

import "./index.scss";
import TeamCertifications from "./views/TeamCertifications.js";

export default (
  <Body>
    <Header />
    <main>
      <figure class="video-hero">
        <VideoEmbedLink
          tagName="div"
          previewImage="/images/HomeVideoBanner.jpg"
          videoId="vjGxQNji05U"
        />
        <figcaption>
          <h2>Trust our amazing team</h2>
          <p>
            If you're looking to <strong>open</strong> an Amazon account,{" "}
            <strong>grow</strong> your existing <ECommerce /> sales or{" "}
            <strong>scale</strong> your business globally – or all three – we
            know exactly how to help you.
            <br />
            We have an incredible team of <ECommerce /> experts with specialist
            knowledge to help you expand your business across Amazon and other
            platforms... and across the globe!
          </p>
          <a href="/contact.html" class="cta">
            Meet with us
          </a>
        </figcaption>
      </figure>

      {/* <section class="area-of-expertise">
        <figure>
          <Picture src="/images/expertise_area.png" alt="" lossless />
          <figcaption>
            <h3>Trust our amazing team</h3>
            <p></p>
            <a href="/experience.html" class="cta">
              Meet with us
            </a>
          </figcaption>
        </figure>
      </section> */}

      <FourStepApproach />

      <section class="twoThird">
        <Picture src="/images/Banner3.1 Testimonials 3x .png" alt="" />
        <Picture src="/images/Banner3.2 Testimonials 3x .png" alt="" />
      </section>

      <Testimonies withBlock />

      {/* <section class="news">
        <h3>Our latest news</h3>

        <article>
          <time dateTime="2021-04-07T14:32:09Z">07.04.2021</time>
          <h4>News headline title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni
            quos commodi sunt, expedita nesciunt maxime, doloribus, enim quaerat
            eum hic ex non. Maiores delectus nemo magni sunt quod et?
          </p>
          <a class="cta" href="">
            Read more
          </a>
        </article>
        <article>
          <time dateTime="2021-04-07T14:32:09Z">07.04.2021</time>
          <h4>News headline title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni
            quos commodi sunt, expedita nesciunt maxime, doloribus, enim quaerat
            eum hic ex non. Maiores delectus nemo magni sunt quod et?
          </p>
          <a class="cta" href="">
            Read more
          </a>
        </article>
        <article>
          <time dateTime="2021-04-07T14:32:09Z">07.04.2021</time>
          <h4>News headline title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni
            quos commodi sunt, expedita nesciunt maxime, doloribus, enim quaerat
            eum hic ex non. Maiores delectus nemo magni sunt quod et?
          </p>
          <a class="cta" href="">
            Read more
          </a>
        </article>

        <a href="/news.html" class="cta inverted">
          The news
        </a>
      </section> */}

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

      <Partners />
      <TeamCertifications />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
