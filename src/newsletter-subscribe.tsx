import { h } from "@aduh95/async-jsx";
import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./newsletter-subscribe.scss";
import "./global-expansion.scss";
import "runtime:./news-runtime.ts";
import Hero from "./views/hero.tsx";
import { EComas, ECommerce } from "./views/eWords.tsx";
import Picture from "./utils/Picture.tsx";
import Newsletter from "./views/newsletter.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import ListElement from "./views/ListElement.tsx";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ecGlobe} from "./utils/customIconDefinition.ts";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faLightbulb } from "@fortawesome/free-regular-svg-icons";
// import Newsletter from "./views/newsletter.tsx";

export default (
  <Body title="Thank you">
    <Header />
    <Hero>
      <h1>Hear More From Us</h1>
      <p>
        Subscribe to the <EComas /> newsletter to keep up with the latest{" "}
        <ECommerce /> news, resources and expert insights that help you succeed
        on Amazon and beyond.
      </p>
    </Hero>
    <main id="main-content">
      {/* <Newsletter /> */}
      <iframe
        src="//go.e-comas.com/l/885733/2024-07-25/nc1ft?Single_Opt_In=yes"
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />

<figure id="made-easy" class="made-easy">
        <figcaption>
          <h3><ECommerce /> events, news and tips - to your inbox</h3>
          <p>
          Stay ahead of the curve and get the resources you need to scale your <ECommerce /> brand globally by signing up to our free newsletter. 
          </p>
          <p>Here’s what you’ll get:</p>
          <p>
            <strong>Amazon Insider Tips:</strong> Master the ever-evolving Amazon landscape with actionable strategies from our team of <ECommerce /> growth specialists and industry friends. 
          </p>
          <p>
            <strong>Global Expansion Hacks:</strong> Discover how to navigate international marketplaces, optimise your brand for global audiences, and achieve explosive growth. 
          </p>
          <p>
            <strong>Content & Webinar Invites:</strong> Gain valuable insights from industry experts at our upcoming webinars and early access to new resources.
          </p>
          <p>
            <strong>Industry News:</strong> Keep up with the latest industry trends, data-driven insights, and experts analysis on Amazon and global <ECommerce />.
          </p>
        </figcaption>
        <Picture src="/images/message-online-chat-social-text-concept.jpg" alt="" class="freepik" />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/e-comas-16-crop.jpg"
        class="about-us"
      >
        <h3>Subscribe To Our Newsletter</h3>
        <p>
          Don't miss out on the knowledge and opportunities that can take your brand to the next level - subscribe to our newsletter 
        </p>
        <div role="list">
          <ListElement
            icon={faAmazon as IconProp}
            title="Become an Amazon Pro"
            desc=""
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title="Expand Globally with Confidence"
            desc=""
          />
          <ListElement
            icon={faCalendar as IconProp}
            title="Free Webinar & Event Access"
            desc=""
          />
          <ListElement
            icon={faLightbulb as IconProp}
            title="Gain Expert Insights"
            desc=""
          />
        </div>
      </ElementWithBackgroundImage>
      {/* <Newsletter /> */}
      <iframe
        src="//go.e-comas.com/l/885733/2024-07-25/nc1ft?Single_Opt_In=yes"
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />

    </main>
    <Footer />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);
