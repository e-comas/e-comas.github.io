import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";

import "./privacy.scss";

export default (
  <Body>
    <Header />
    <main>
      <h2>Privacy policy</h2>
      <p>
        We (e-Comas - eCommerce Made Simple) collect data about you on our
        website, for our own use, for marketing purposes and so that we can
        contact you. <br />
        Our data collection is mainly through forms on the website. When you
        fill out one of these forms – for example, telling us your name, email
        address and business size – we can use this information to contact you
        in the most relevant, personal way, whether by getting the right member
        of our team to call you, or by sending you emails that are relevant to
        your business.
        <br />
        Our forms and database software are provided by Pardot by Salesforce.
        <br />
        Occasionally we also collect data through LinkedIn, Facebook, Instagram
        and Twitter. For example, when we receive messages enquiring about our
        services, we will save your name and contact information so we can help
        you.
        <br />
        From time to time we may send you emails and newsletters with useful
        information about eCommerce. You can opt out of these by clicking the
        'unsubscribe' button.
      </p>

      <h2>Cookie policy</h2>
      <p>
        This website uses cookies for statistic purposes, only if permission was
        granted by the user. You can retract or give back your consent regarding
        cookie usage at any time using the ad-hoc link in the footer.
        <br />
        When clicking on play button to play video, a YouTube page will be
        loaded and may store cookies on your computer. More info on their{" "}
        <a href="https://policies.google.com/technologies/cookies">
          Cookie policy page
        </a>
        .
      </p>
    </main>
    <Footer />
  </Body>
).then((elem) => document.body.append(elem));
