import { h } from "@aduh95/async-jsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import NativeECommerceIllustration from "./NativeECommerceIllustration.js";
import "./NativeECommerce.scss";
import { ECommerce } from "./eWords.js";

export default () => (
  <section id="native-eCommerce">
    <h3>
      Native <ECommerce />
    </h3>
    <div class="illustration">
      <div>
        <NativeECommerceIllustration />
        <ul>
          <li>Web shop</li>
          <li>
            <img src="/images/brands/google.svg" alt="Google logo" />
            Google shop
          </li>
        </ul>
      </div>
      <div>
        <NativeECommerceIllustration />
        <ul>
          <li>
            <img src="/images/brands/instagram.svg" alt="Instagram logo" />
            Instagram shop
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            Facebook shop
          </li>
        </ul>
      </div>
      <div>
        <NativeECommerceIllustration />
        <ul>
          <li>
            <img src="/images/partners/amazon.svg" alt="Amazon logo" />
            Brand shop
          </li>
        </ul>
      </div>
    </div>
    <div class="article-wrapper">
      <article>
        <h4>Fulfillment</h4>
        <ul>
          <li>Supply Chain</li>
          <li>Order Management</li>
          <li>Customer Service</li>
        </ul>
      </article>
      <article>
        <h4>Content</h4>
        <ul>
          <li>Creation</li>
          <li>Organisation (DAM / PIM)</li>
          <li>Syndication</li>
        </ul>
      </article>
    </div>
  </section>
);
