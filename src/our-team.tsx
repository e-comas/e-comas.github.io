import { h } from "@aduh95/async-jsx";

import team from "./utils/team.toml";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";

import "./our-team.scss";

export default (
  <Body title="The Team">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Our team</h2>
        <ul class="face-book">
          {team.map(({ Name, Title, pictureUrl }) => (
            <li>
              <figure>
                <Picture src={pictureUrl} alt={"Picture of " + Name} />
                <figcaption>
                  <strong>{Name}</strong>
                  <em>{Title}</em>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
