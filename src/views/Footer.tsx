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

import "runtime:../utils/cookie_content.js";
import "../utils/cookie_content.scss";

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
          <NavLink href="/services.html">Services</NavLink>
        </li>
        <li>
          <NavLink href="/our-team.html">Team</NavLink>
        </li>
        <li>
          <NavLink href="/webinar.html">Webinar</NavLink>
        </li>
        <li>
          <NavLink href="/white-paper-form.html">White paper</NavLink>
        </li>
        {/* <li>
          <NavLink href="/news.html">Blog</NavLink>
        </li> */}
        <li>
          <NavLink href="/privacy.html">Privacy policy</NavLink>
        </li>
      </ul>
    </nav>
    <ul class="contact-us">
      <li>
        <strong>
          <NavLink href="/contact.html">Contact us</NavLink>
        </strong>
      </li>
      <li>
        Phone: <a href="tel:&plus;352621830003">+352 621 830 003</a>
      </li>
      <li>
        Addresses:
        <ul>
          <li>
            EU:{" "}
            <address>
              68 Avenue de la Liberté - L-1930 Luxembourg - LUXEMBOURG
            </address>
          </li>
          <li>
            US:{" "}
            <address>457 Wilshire Lane - Santa Maria, CA 93455 - USA</address>
          </li>
          <li>
            Madagascar:{" "}
            <address>
              Lot IVG AF 97 Behoririka - Antananarivo - Madagascar
            </address>
          </li>
          <li>
            India:{" "}
            <address>
              B106, Saroj Enclave – Ben Satya Layout, Geddalahalli – Bangalore ,
              Karnataka – India - 560043
            </address>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="social">
      <li>
        <a
          href="https://www.linkedin.com/company/e-comas/"
          rel="noopener"
          target="_blank"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/ecommerce.made.simple/"
          rel="noopener"
          target="_blank"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/e.comas.amazon.made.simple/"
          rel="noopener"
          target="_blank"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://amazon-expert.medium.com/"
          rel="noopener"
          target="_blank"
          title="Medium"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UC8FEB3vsicxo5gI3mtdl50A"
          rel="noopener"
          target="_blank"
          title="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </ul>
    <div class="copyright-notice">© 2021 · e-Comas · All Rights Reserved</div>
  </footer>
);
