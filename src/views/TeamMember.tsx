import { h } from "@aduh95/async-jsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Picture from "../utils/Picture.js";

const socialMediaIcons = {
  LinkedIn: faLinkedinIn,
  YouTube: faYoutube,
  Calendly: faCalendarAlt,
  email: faEnvelope,
} as {
  [socialMedium: string]: IconDefinition;
};

export interface SocialTeamMemberProps {
  url?: {
    [socialMedium: string]: string;
  };
  children?: any[];
  ref?: any;
}
export interface TeamMemberProps extends SocialTeamMemberProps {
  Name: string;
  Title: string;
  pictureUrl: string;
  Team?: string;
  priority?: number;
}

export interface Team {
  name: string;
  members: TeamMemberProps[];
}

export function SocialURLs({ url }: SocialTeamMemberProps) {
  if (url == null) return null;
  return (
    <div class="social">
      {Object.entries(url)
        .concat(
          location.pathname !== "/contact.html"
            ? []
            : [["email", "mailto:sales@e-comas.com"]]
        )
        .map(([socialMedium, url]) =>
          location.pathname !== "/contact.html" &&
          socialMedium === "Calendly" ? null : (
            <a href={url} target="_blank" rel="noopener" title={socialMedium}>
              <FontAwesomeIcon icon={socialMediaIcons[socialMedium]} />
            </a>
          )
        )}
    </div>
  );
}

export default function TeamMember({
  Name,
  Title,
  pictureUrl,
  url,
}: TeamMemberProps) {
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
