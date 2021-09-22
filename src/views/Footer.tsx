import { h } from "@aduh95/async-jsx";

import NavLink from "../utils/NavLink.js";

import "./footer.scss";

export default () => (
  <footer>
    <img
      src="/images/logo.svg"
      alt="e-Comas, eCommerce made simple"
      class="logo"
    />
    <nav>
      <ul>
        <li>
          <NavLink href="/services.html">Service</NavLink>
        </li>
        <li>
          <NavLink href="/experience.html">Experience</NavLink>
        </li>
        <li>
          <NavLink href="/our-team.html">Team</NavLink>
        </li>
        <li>
          <NavLink href="/news.html">Blog</NavLink>
        </li>
      </ul>
    </nav>
    <nav>
      <h5>Our approach</h5>
      <ul>
        <li>
          <NavLink href="/strategy.html">Strategy</NavLink>
        </li>
        <li>
          <NavLink href="/conversion.html">Conversion</NavLink>
        </li>
        <li>
          <NavLink href="/operation.html">Operation</NavLink>
        </li>
        <li>
          <NavLink href="/traffic.html">Traffic</NavLink>
        </li>
      </ul>
    </nav>
    <div class="contact-us">
      <h5>Contact us</h5>
      <address>68 Avenue de la Liberté - L-1930 Luxembourg</address>
      Tel.: <a href="tel:&plus;352621830003">+352 621 830 003</a> - M.:
      ecomassimple@e-comas.com
    </div>
    <div class="copyright-notice">© 2021 · E-comas · All Rights Reserved</div>
  </footer>
);
