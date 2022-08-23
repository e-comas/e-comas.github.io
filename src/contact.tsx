import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import TeamMember, { TeamMemberProps } from "./views/TeamMember.js";
import team from "./utils/team.toml";

import "./contact.scss";
import "runtime:./utils/frame-auto-height.js";
import { ECommerce } from "./views/eWords.js";

interface Member extends TeamMemberProps {
  contactPage?: boolean;
}

export default (
  <Body title="Contact us">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>Get in touch!</h2>
      <p>
        Do you want to work with us to build a global <ECommerce /> empire from
        the ground up? Or maybe you've just got a quick question about Amazon?
        <strong>Either way, we can help - just give us a shout!</strong>
      </p>
      <h3>Chat to our lovely Business Development team today</h3>
      <div class="face-book">
        {(team.team_member as Member[])
          .filter((member) => member.contactPage)
          .map(TeamMember)}
      </div>
      <p>Or fill in the form below and we'll get back to you!</p>
      <iframe
        title="Contact us form"
        width="100%"
        height="1305"
        frameborder="0"
        allowtransparency
        data-src="//go.pardot.com/l/885733/2020-09-10/25cw"
        src="//go.pardot.com/l/885733/2020-09-10/25cw"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
