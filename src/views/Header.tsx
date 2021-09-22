import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.jsx";

import "./header.scss";

interface HeaderLinkProps {
  href: string;
  children?: any;
}
function HeaderLink({ href }: HeaderLinkProps) {
  const url = new URL(href, location.origin);
  const isCurrentPage =
    location.origin === url.origin && location.pathname === url.pathname;
  return isCurrentPage ? <a class="active" /> : <a href={href} />;
}

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
        <HeaderLink href="/services.html">Services</HeaderLink>
        <ul>
          <li>
            <HeaderLink href="/strategy.html">Strategy</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/operation.html">Operation</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/conversion.html">Conversion</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/traffic.html">Traffic</HeaderLink>
          </li>
        </ul>
      </div>
      <HeaderLink href="/experience.html">Experience</HeaderLink>
      <HeaderLink href="/our-team.html">Team</HeaderLink>
      <HeaderLink href="/news.html">Blog</HeaderLink>
      <HeaderLink href="/contact.html">Contact us</HeaderLink>
    </nav>
    <h1>
      Be visible and sell easily and quickly on Amazon and on the biggest
      marketplaces!
    </h1>
  </ElementWithBackgroundImage>
);
