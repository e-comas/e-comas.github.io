import { h } from "@aduh95/async-jsx";
import Body from "./views/Body";
import Header from "./views/Header";
import yaml from "./utils/yaml";
import "./clientlogin.scss";
import Hero from "./views/hero";
import { EComas, ECommerce } from "./views/eWords";
import Footer from "./views/Footer";
import Picture from "./utils/Picture";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default (
  <Body title="Login page">
    <Header />
    <Hero>
      <h1>Client Login</h1>
      <p>
        Welcome to the <EComas /> Compas Dashboard – the all-in-one reporting
        tool, giving you full visibility and holistic insights into your online
        performances and campaigns. Sign in to your client account to manage
        your operations in one place, including retail channels, product
        information, sales, advertising, and more!
      </p>
      <section id="links">
        <a href="https://reports.e-comas.com/seller" class="cta">
          Seller
        </a>
        <a href="https://reports.e-comas.com/vendor" class="cta">
          Vendor
        </a>
      </section>
    </Hero>
    <main id="main-content">
      <section>
        <h2> ONE login, HOURLY insights YOUR data, YOUR way</h2>
        <p>
          Want to get up to speed on the{" "}
          <a href="https://e-comas.com/2023/04/25/introducing-compas-dashboard-the-all-in-one-reporting-tool-for-amazon-sellers.html">
            <EComas /> Compas Dashboard?
          </a>
        </p>
        <p>
          Not a client yet, but want to find out more about how{" "}
          <a href="https://e-comas.github.io/about-us.html">
            {" "}
            we make <ECommerce /> simple?
          </a>
        </p>
        <figure>
          <Picture src={"/images/team/Claudiu.png"} alt={"Claudiu Clement"} />
          <figcaption>
            <strong>
              Speak to our Head of Analytics, Claudiu, for more information.
            </strong>
            <a href="mailto:c.clement@e-comas.com" class="cta no-arrow">
              <FontAwesomeIcon icon={faEnvelope as IconProp} /> Email
            </a>
          </figcaption>
        </figure>
      </section>
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
