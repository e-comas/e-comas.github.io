import { h } from "@aduh95/async-jsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Picture from "../utils/Picture.tsx";

const socialMediaIcons = {
  LinkedIn: faLinkedinIn,
  YouTube: faYoutube,
  Calendly: faPhone,
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
        .map(([socialMedium, url]) => (
          <a href={url} target="_blank" rel="noopener" title={socialMedium}>
            <FontAwesomeIcon icon={socialMediaIcons[socialMedium]} />
          </a>
        ))}
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
      {pictureUrl ? (
        <Picture src={pictureUrl} alt={"Picture of " + Name} />
      ) : (
        <div class="picture-wrapper undefined">
          <img src="/images/icons/missing-headshot.svg"></img>
        </div>
      )}
      <figcaption>
        <strong>{Name}</strong>
        <em>{Title}</em>
        <SocialURLs url={url} />
      </figcaption>
    </figure>
  );
}
