import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.jsx";
import NavLink from "../utils/NavLink.js";

import "./header.scss";

export default () => (
  <ElementWithBackgroundImage tagName="header" src="/images/Banner1 Hero 3x .png">
    <a href="/">
      <img
        src="/images/logo.svg"
        alt="e-Comas, eCommerce made simple"
        class="logo"
      />
    </a>
    <details>
      <summary aria-label="Open navigation menu" />
    </details>
    <nav>
      <div>
        <NavLink href="/services.html">Services</NavLink>
        <ul>
          <li>
            <NavLink href="/strategy.html">Strategy</NavLink>
          </li>
          <li>
            <NavLink href="/operation.html">Operation</NavLink>
          </li>
          <li>
            <NavLink href="/conversion.html">Conversion</NavLink>
          </li>
          <li>
            <NavLink href="/traffic.html">Traffic</NavLink>
          </li>
        </ul>
      </div>
      <NavLink href="/experience.html">Experience</NavLink>
      <NavLink href="/our-team.html">Team</NavLink>
      <NavLink href="/news.html">Blog</NavLink>
      <NavLink href="/contact.html">Contact us</NavLink>
    </nav>
    <h1>
      Be visible and sell easily and quickly on Amazon and on the biggest
      marketplaces!
    </h1>
  </ElementWithBackgroundImage>
);
