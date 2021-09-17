import { h } from "@aduh95/async-jsx";

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
        <li>Service</li>
        <li>Experience</li>
        <li>Team</li>
        <li>Blog</li>
      </ul>
    </nav>
    <nav>
      <h5>Our approach</h5>
      <ul>
        <li>Strategy</li>
        <li>Conversion</li>
        <li>Operation</li>
        <li>Traffic</li>
      </ul>
    </nav>
    <div>
      <h5>Contact us</h5>
      <address>68 Avenue de la Liberté - L-1930 Luxembourg</address>
      Tel.: <a href="tel:&plus;352621830003">+352 621 830 003</a> - M.:
      ecomassimple@e-comas.com
    </div>
    <div class="copyright-notice">© 2021 · E-comas · All Rights Reserved</div>
  </footer>
);
