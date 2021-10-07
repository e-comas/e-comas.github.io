import { h } from "@aduh95/async-jsx";

import team from "./utils/team.toml";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";

import "./our-team.scss";

interface TeamMemberProps {
  Name: string;
  Title: string;
  pictureUrl: string;
  bio?: string;
  children?: any[];
  ref?: any;
}

function TeamMemberFigure({ Name, Title, pictureUrl }: TeamMemberProps) {
  return (
    <figure>
      <Picture src={pictureUrl} alt={"Picture of " + Name} />
      <figcaption>
        <strong>{Name}</strong>
        <em>{Title}</em>
      </figcaption>
    </figure>
  );
}

function TeamMember(infos: TeamMemberProps) {
  if (!infos.bio) {
    return <TeamMemberFigure {...infos} />;
  }

  return (
    <details>
      <summary>
        <TeamMemberFigure {...infos} />
      </summary>
      <p>{infos.bio}</p>
    </details>
  );
}

export default (
  <Body title="The Team">
    <Header />
    <Breadcrumbs />
    <main>
      <section>
        <h2>Our team</h2>
        <ul class="face-book">
          {team.map((infos) => (
            <li>
              <TeamMember {...infos} />
            </li>
          ))}
        </ul>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
