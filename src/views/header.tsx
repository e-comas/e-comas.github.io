import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.jsx";

import "./header.scss";

export default () => (
  <ElementWithBackgroundImage tagName="header" src="/images/hero.jpg">
    <a href="/">
      <img
        src="/images/logo.svg"
        alt="e-Comas, eCommerce made simple"
        class="logo"
      />
    </a>
    <nav>
      <div>
        <a href="/services.html">Services</a>
        <ul>
          <li>
            <a>Strategy</a>
          </li>
          <li>
            <a>Operation</a>
          </li>
          <li>
            <a>Conversion</a>
          </li>
          <li>
            <a>Traffic</a>
          </li>
        </ul>
      </div>
      <a href="/experience.html">Experience</a>
      <a href="/our-team.html">Team</a>
      <a href="/news.html">Blog</a>
      <a href="/contact.html">Contact us</a>
    </nav>
    <h1>
      Be visible and sell easily and quickly on Amazon and on the biggest
      marketplaces!
    </h1>
  </ElementWithBackgroundImage>
);
