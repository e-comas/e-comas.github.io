import { h } from "@aduh95/async-jsx";
import Body from "./views/Body";
import Header from "./views/Header";
import yaml from "./utils/yaml";
import "./clientlogin.scss";
import Hero from "./views/hero";
import { ECommerce } from "./views/eWords";
import Footer from "./views/Footer";

export default (
  <Body title="Login page">
    <Header />
    <Hero>
      <h1>Get in touch!</h1>
      <p>
        Do you want to work with us to build a global <ECommerce /> empire from
        the ground up? Or maybe you've just got a quick question about Amazon?{" "}
        <strong>Either way, we can help - just give us a shout!</strong>
      </p>
      <h3>Chat to our lovely Business Development team today</h3>
    </Hero>
    <main id="main-content">
      <a href="https://reports.e-comas.com/seller" class="cta">
        Seller
      </a>
      <a href="https://reports.e-comas.com/vendor" class="cta">
        Vendor
      </a>
    </main>
    <Footer />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);
