import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import FourStepApproach from "./views/FourStepApproach.js";

export default (
  <Body>
    <Header />
    <main>
      <section>
        <figure>
          <figcaption style={{ paddingLeft: 0 }}>
            <h3>Our audit tool: Compas</h3>
            <ul>
              <li>
                Capture customer’s expectations, preferences, experiences and
                feedback about your products;
              </li>
              <li>Present high level trends in review scores;</li>
              <li>
                Extract customers’ sentiment about specific products/categories
              </li>
              <li>
                (positive/neutral/negative) Your Compas report reveals what your
                company
              </li>
              <li>
                is doing well and where you are lagging behind, acting like a
                compass in helping you follow future directions on the main
                success factors we have identified: Strategy - Operations -
                Conversion - Traffic
              </li>
            </ul>
          </figcaption>
          <picture>
            <img src="./images/DSC_0041.jpg" alt="" />
          </picture>
        </figure>
      </section>

      <FourStepApproach />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
