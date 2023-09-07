import { h } from "@aduh95/async-jsx";

import "./what-we-do.scss";
import "runtime:./about-us-runtime.ts";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.tsx";
import ListElement from "./ListElement.tsx";
import {
  ecAccountManagement,
  ecGlobalExpansion,
  ecTrolley,
} from "../utils/customIconDefinition.ts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBullhorn,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="/images/Ecomma-b2.jpg"
    class="about-us"
  >
    <h3>Our Expertise</h3>
    <p>
      From handling logistics and taxes to product translation and localisation,
      we've got you covered. Sit back and relax with our hassle-free full
      service solution.
    </p>
    <div role="list">
      <ListElement
        title="Strategy & Planning"
        desc="Learn what it takes to be successful on Amazon and in eCommerce. Once you’re up to speed, our experts help you define the best growth strategy for your brands and market."
      />
      <ListElement
        icon={ecGlobalExpansion as IconProp}
        title="EU Expansion"
        desc="Don’t miss out on the huge opportunity that is Europe. Split into multiple countries, you’ll have to conquer them one by one but don’t worry; our native speakers will get you ready in no time."
      />
      <ListElement
        icon={ecGlobalExpansion as IconProp}
        title="US Expansion"
        desc="The US is Amazon’s home base, which means the largest market to sell in. We’ve helped many brands expand from Europe or Asia to the US; let us help you thrive in this key market."
      />
      <ListElement
        icon={ecGlobalExpansion as IconProp}
        title="Asia Expansion"
        desc="The Asian eCommerce market is massive, but with our local teams on hand, we can help you navigate these complex marketplaces and expand on Amazon in India, Singapore and Japan."
      />
      <ListElement
        icon={ecGlobalExpansion as IconProp}
        title="RoW Expansion"
        desc="Want to expand in South America, South Africa or Australia? We work closely with trusted local partners that can help you reach and succeed in each corner of the world."
      />
      <ListElement
        icon={ecAccountManagement as IconProp}
        title="Account Management"
        desc="We can manage the day-to-day aspects of your eCommerce account. From cataloguing to handling your retail media campaigns and analytics reporting, we’ve got you covered."
      />
      <ListElement
        icon={ecTrolley as IconProp}
        title="Retail"
        desc="Use our Seller account and team of experts to import and sell your products in your name. The best part? We’ll take care of taxes and all the management of the account."
      />
      <ListElement
        icon={faBullhorn as IconProp}
        title="Retail Media"
        desc="Let us handle your social media, search engine and marketplace advertising. We can also give you access to AMC (Amazon Marketing Cloud) and Amazon Marketing Stream to help you grow faster."
      />
      <ListElement
        icon={faMagnifyingGlass as IconProp}
        title="Technology & Analytics"
        desc="Our multilingual team can target your strategy to drive sales in new markets and engage online shoppers worldwide with their knowledge of the nuances of different countries, languages and cultures."
      />
    </div>
    <a href="about:blank" class="cta animatable">
      Book a Call
    </a>
  </ElementWithBackgroundImage>
);
