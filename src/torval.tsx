import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import Hero from "./views/hero.tsx";
import Picture from "./utils/Picture.tsx";

import "./views/animate-in.scss";
import "runtime:./views/animate-in.ts";
import "./global-expansion.scss";
import "./torval.scss";

import { EComas, ECommerce } from "./views/eWords.tsx";

export default (
  <Body>
    <Header />
    <Hero class="animate-in long-page">
      <h1 class="title">Torval Holding Group</h1>
      <p>
        <EComas /> is a company of the Torval Holding Group. Torval strives to
        offer outstanding services in the distribution, <ECommerce /> and
        branding space.{" "}
      </p>
    </Hero>

    <main id="main-content">
      <figure id="made-easy" class="made-easy">
        <figcaption>
          <div id="address">
            <h3>Torval Holding Sarl</h3>
            <div> 68 avenue de la Liberté</div>
            <div>1930 Luxembourg</div>
            <div> Luxembourg</div>
          </div>
          <div id="legal">
            <div>
              Torval Holding is incorporated in Luxembourg under the number
              B244702
            </div>
            <div> VAT Number: LU34804151 </div>
          </div>
          <div id="banking">
            <div> Bank:</div>
            <div> Beneficiary: Torval Holding</div>
            <div> IBAN: LT39 3250 0176 6063 5040</div>
            <div> BIC: REVOLT21 </div>
            <div> Intermediary BIC: CHASDEFX </div>
          </div>
        </figcaption>
        <Picture src="/images/white-paper-1.png" alt="illustration" />
      </figure>
    </main>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout:none`));
