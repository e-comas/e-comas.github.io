import { h } from "@aduh95/async-jsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

import team from "./utils/team.toml";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Picture from "./utils/Picture.js";
import Footer from "./views/Footer.js";
import { EComas } from "./views/eWords.js";

import "./our-team.scss";

const socialMediaIcons = {
  LinkedIn: faLinkedinIn,
  YouTube: faYoutube,
} as {
  [socialMedium: string]: IconDefinition;
};

interface SocialTeamMemberProps {
  url?: {
    [socialMedium: string]: string;
  };
  children?: any[];
  ref?: any;
}
interface TeamMemberProps extends SocialTeamMemberProps {
  Name: string;
  Title: string;
  pictureUrl: string;
  Team?: string;
  priority?: number;
}

interface Team {
  name: string;
  members: TeamMemberProps[];
}

function sortTM(a: TeamMemberProps, b: TeamMemberProps) {
  if (a.priority != null && b.priority == null) return -1;
  if (a.priority == null && b.priority != null) return 1;
  if (a.priority! < b.priority!) return 1;
  if (a.priority! > b.priority!) return -1;

  const aHead = a.Title.startsWith("Head of");
  const bHead = b.Title.startsWith("Head of");
  if (aHead && !bHead) return -1;
  if (!aHead && bHead) return 1;
  return a.Name.localeCompare(b.Name);
}
function getTeams(teamMembers: TeamMemberProps[]) {
  const teams: Record<string, Team> = Object.create(null);
  for (const teamMember of teamMembers.sort(sortTM)) {
    if (teamMember.Team && teamMember.Team in teams) {
      teams[teamMember.Team].members.push(teamMember);
    } else if (teamMember.Team) {
      teams[teamMember.Team] = { name: teamMember.Team, members: [teamMember] };
    }
  }
  return team.team_order
    .map((teamName) => {
      const r = teams[teamName];
      delete teams[teamName];
      return r;
    })
    .concat(Object.values(teams));
}

function SocialURLs({ url }: SocialTeamMemberProps) {
  if (url == null) return null;
  return (
    <div class="social">
      {Object.entries(url).map(([socialMedium, url]) => (
        <a href={url} target="_blank" rel="noopener">
          <FontAwesomeIcon icon={socialMediaIcons[socialMedium]} />
        </a>
      ))}
    </div>
  );
}

function TeamMember({ Name, Title, pictureUrl, url }: TeamMemberProps) {
  return (
    <figure>
      <Picture src={pictureUrl} alt={"Picture of " + Name} />
      <figcaption>
        <strong>{Name}</strong>
        <em>{Title}</em>
        <SocialURLs url={url} />
      </figcaption>
    </figure>
  );
}

export default (
  <Body title="The Team">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>
        The <EComas /> team
      </h2>
      <p>
        Some of the known industry stalwarts with proven experience have come
        together to form team: <strong>e-Comas</strong> was born. Our team's
        passion <strong>helps your business grow</strong> by coaching you in
        Amazon's Key Success Factors. Our team comprises ex-brand directors,
        ex-Amazonians, and operational experts to help you grow on Amazon.
      </p>
      <figure>
        <Picture
          src={team.CEO.pictureUrl}
          alt={team.CEO.Name + ", " + team.CEO.Title}
        />
        <figcaption>
          <h3>{team.CEO.Name}</h3>
          <h4>{team.CEO.Title}</h4>
          <p>{team.CEO.bio}</p>
          <SocialURLs url={team.CEO.url} />
        </figcaption>
      </figure>
      <figure>
        <Picture
          src={team.COO.pictureUrl}
          alt={team.COO.Name + ", " + team.COO.Title}
        />
        <figcaption>
          <h3>{team.COO.Name}</h3>
          <h4>{team.COO.Title}</h4>
          <p>{team.COO.bio}</p>
          <SocialURLs url={team.COO.url} />
        </figcaption>
      </figure>
      {getTeams(team.team_member).map((team) => (
        <article>
          <h3>{team.name}</h3>
          <ul class="face-book">
            {team.members.map((infos) => (
              <li>
                <TeamMember {...infos} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
