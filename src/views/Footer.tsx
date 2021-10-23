import { h } from "@aduh95/async-jsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faMediumM,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
        {/* <li>
          <NavLink href="/news.html">Blog</NavLink>
        </li> */}
      </ul>
    </nav>
    <div class="contact-us">
      <h5>
        <NavLink href="/contact.html">Contact us</NavLink>
      </h5>
      <address>68 Avenue de la Liberté - L-1930 Luxembourg</address>
      Tel.: <a href="tel:&plus;352621830003">+352 621 830 003</a> - M.:
      ecomassimple@e-comas.com
    </div>
    <nav class="social">
      <li>
        <a href="about:blank" rel="noopener" target="_blank" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="about:blank" rel="noopener" target="_blank" title="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href="about:blank" rel="noopener" target="_blank" title="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="about:blank" rel="noopener" target="_blank" title="Medium">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </li>
      <li>
        <a href="about:blank" rel="noopener" target="_blank" title="YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </nav>
    <div class="copyright-notice">© 2021 · E-comas · All Rights Reserved</div>
  </footer>
);
