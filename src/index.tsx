import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
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
          <Picture src="/images/expertise_area.png" alt="" />
          <figcaption style={{ paddingLeft: 0 }}>
            <h3>Our area of expertise</h3>
            <p>
              Our team has over 30 years of experience working with Amazon and
              the brands on it. We can help you save time and grow faster on
              Amazon's various marketplaces.
            </p>
            <a href="/experience.html" class="cta inverted">
              Read more
            </a>
          </figcaption>
        </figure>
      </section>

      <section class="inverted">
        <figure>
          <figcaption>
            <h3>e-Comas in video</h3>
            <ul>
              <li>Ate maximus, sum quaspiendam fuga.</li>
              <li>Lenia plaboriberum is et dersperspide.</li>
              <li>Ate maximus, sum quaspiendam fuga.</li>
              <li>Lenia plaboriberum is et dersperspide.</li>
            </ul>
            <a href="/our-team.html" class="cta">
              Read more
            </a>
          </figcaption>
          <Picture
            class="cover"
            src="/images/video_preview.jpg"
            alt="eComas video"
          />
        </figure>
      </section>

      <FourStepApproach />

      <section class="twoThird">
        <Picture src="/images/DSC_0041.JPG" alt="" />
        <Picture src="/images/DSC_0086.JPG" alt="" />
      </section>

      <section class="threeQuarter">
        <div class="testimonies">
          <h2>They did it</h2>
          <img aria-hidden="true" src="/images/quotes.svg" />
          <figure>
            <figcaption>
              <Picture
                src="/images/why-are-we-here.jpeg"
                alt="Name of the TRUSTOR"
              />
              <time dateTime="1970-01-01">01.01.1970</time>
              <strong>Name of the TRUSTOR</strong>
            </figcaption>
            <blockquote>
              Volesenda pa venim rest facil eaquid ut expliquis doluptas et
              fugiame verum alis exceris eum estrum et lautasi molupta sequia
              eicipsam, apientotae est, ipsae perspis pe et, nulparu ptassuscit.
            </blockquote>
          </figure>
          <a href="/testimonials.html" class="cta">
            The testimonies
          </a>
        </div>
        <Picture src="/images/IMG_5893.jpg" alt="illustration" />
      </section>

      <section class="news">
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
      </section>

      <ElementWithBackgroundImage
        tagName="section"
        src="/images/key-figures-illustration.jpeg"
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

      <section class="partners">
        <h2>Partners we trust</h2>
        <div>
          <img alt="partner" />
          <img alt="partner" />
          <img alt="partner" />
          <img alt="partner" />
          <img alt="partner" />
          <img alt="partner" />
        </div>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
