import { h } from "@aduh95/async-jsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
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

import "runtime:./footer_addresses.js";
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
          <NavLink href="/about-us.html">About us</NavLink>
        </li>
        <li>
          <NavLink href="/our-team.html">Team</NavLink>
        </li>
        <li>
          <NavLink href="/testimonials.html">Testimonials</NavLink>
        </li>
        <li>
          <NavLink href="/webinar.html">Webinars</NavLink>
          {/* <NavLink href="/legals.html">Legals</NavLink> */}
        </li>
        <li>
          <NavLink href="/privacy.html">Privacy policy</NavLink>
        </li>
      </ul>
    </nav>
    <strong>What we do</strong>
    <nav>
      <ul>
        <li>
          <NavLink href="/consulting.html">Consulting</NavLink>
        </li>
        <li>
          <NavLink href="/operations.html">Operations</NavLink>
        </li>
        <li>
          <NavLink href="/syndication.html">Content/PIM/Syndications</NavLink>
        </li>
        <li>
          <NavLink href="/advertising.html">Advertising</NavLink>
        </li>
        <li>
          <NavLink href="/website-creation.html">Website Creation</NavLink>
        </li>
        <li>
          <NavLink href="/analytics.html">Analytics</NavLink>
        </li>
      </ul>
    </nav>
    <strong>
      <NavLink href="/contact.html">Contact us</NavLink>
    </strong>
    <ul class="contact-us">
      <li>
        Email: <a href="mailto:sales@e-comas.com">sales@e-comas.com</a>
      </li>
      <li>
        Addresses:
        <ul class="addresses">
          <li>
            <span>EU</span>:{" "}
            <address>
              68 Avenue de la Liberté - L-1930 Luxembourg - LUXEMBOURG
            </address>
          </li>
          <li>
            <span>US</span>:{" "}
            <address>457 Wilshire Lane - Santa Maria, CA 93455 - USA</address>
          </li>
          <li>
            <span>MG</span>:{" "}
            <address>
              Lot IVG AF 97 Behoririka - Antananarivo - Madagascar
            </address>
          </li>
          <li>
            <span>IN</span>:{" "}
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
          <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/ecomas.ecommerce.made.simple/"
          rel="noopener"
          target="_blank"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF as IconProp} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ecomas.ecommerce.made.simple/"
          rel="noopener"
          target="_blank"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram as IconProp} />
        </a>
      </li>
      <li>
        <a
          href="https://amazon-expert.medium.com/"
          rel="noopener"
          target="_blank"
          title="Medium"
        >
          <FontAwesomeIcon icon={faMediumM as IconProp} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UClCYdUcUs1zJk8O3a4lC9lw"
          rel="noopener"
          target="_blank"
          title="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube as IconProp} />
        </a>
      </li>
    </ul>
    <img
      src="/images/MadeInLux.svg"
      alt="Made in Luxembourg"
      class="made_in_lux"
    />
    <div class="copyright-notice">© 2022 · e-Comas · All Rights Reserved</div>
  </footer>
);
