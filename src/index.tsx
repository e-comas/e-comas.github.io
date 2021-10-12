import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Testimonies from "./views/Testimonies.js";
import Partners from "./views/Partners.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import FourStepApproach from "./views/FourStepApproach.js";
import Picture from "./utils/Picture.js";

import "./index.scss";

export default (
  <Body>
    <Header />
    <main>
      <section>
        <figure>
          <figcaption>
            <h3>Trust our amazing team</h3>
            <p>
              If you're looking to <strong>open</strong> an Amazon account,{" "}
              <strong>grow</strong> your existing ecommerce sales or{" "}
              <strong>scale</strong> your business globally – or all three – we
              know exactly how to help you.
              <br />
              We have an incredible team of ecommerce experts with specialist
              knowledge to help you expand your business across Amazon and other
              platforms... and across the globe!
            </p>
            <a href="/contact.html" class="cta">
              Meet with us
            </a>
          </figcaption>
          <ElementWithBackgroundImage
            tagName="div"
            src="/images/Banner2 Video 3x .png"
            class="video-link"
          >
            <a
              href="https://www.youtube.com/watch?v=vjGxQNji05U"
              data-embed="https://www.youtube-nocookie.com/embed/vjGxQNji05U"
              target="_blank"
              title="Watch on YouTube"
            >
              Play video on YouTube
            </a>
            {/* <iframe
              width="320"
              height="315"
              src="https://www.youtube-nocookie.com/embed/vjGxQNji05U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            /> */}
          </ElementWithBackgroundImage>
        </figure>
      </section>

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

      <section class="threeQuarter">
        <Testimonies withBlock />
        <Picture
          src="/images/Banner3.3 Testimonials 3x .png"
          alt="illustration"
        />
      </section>

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
          <strong>+25&nbsp;000</strong> listing managed
        </p>
        <p>
          <strong>+100</strong> vendor &amp; seller accounts opened/managed
        </p>
        <p>
          <strong>+100&nbsp;000&nbsp;€</strong> advertising campaigns handled
        </p>
      </ElementWithBackgroundImage>

      <Partners />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
