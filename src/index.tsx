import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";
import Testimonies from "./views/Testimonies.tsx";
import Partners from "./views/Partners.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";
import AnimatedFigure from "./views/AnimatedFigure.tsx";
import VideoEmbedLink from "./views/VideoEmbedLink.tsx";
import OurServices from "./views/OurServices.tsx";
import Picture from "./utils/Picture.tsx";

import "./index.scss";
import TeamCertifications from "./views/TeamCertifications.tsx";

export default (
  <Body>
    <Header />
    <main id="main-content">
      <div class="intro-container">
        <div class="intro-container-overlay"></div>
        <div class="intro">
          <h5>THE BOUTIQUE AGENCY YOU NEED TO THRIVE ON</h5>
          <br />
          <img src="images/partners/minified-anim.svg"></img>
          <br />
          <p>
            Let <EComas />, a global full service <ECommerce /> agency, help
            your brand grow on Amazon and other marketplaces through strategic
            global expansion, technological infrastructure and cutting edge
            media campaigns.
          </p>
          <br />
          <a href="/services.html" class="cta">
            Our services →
          </a>
        </div>
        <div class="earth-graphic">
          <img src="images/Earth.svg"></img>
        </div>
      </div>
      {/* <div class="video-container" onclick={() => showVideo()} id="video-player">
        <div></div>
      </div> */}
      <div class="video-container">
        <VideoEmbedLink
          tagName="div"
          previewImage="images/team-picture-EU.jpg"
          videoId="vjGxQNji05U"
        />
      </div>


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

      <OurServices />

      <section class="fourSeventhThreeSeventh">
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
