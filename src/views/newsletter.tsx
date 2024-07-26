import { h } from "@aduh95/async-jsx";
import { ECommerce } from "./eWords";

import "./newsletter.scss";

export default () => (
  <section id="newsletter">
    <h3>Hear more from us</h3>
    <p>
      Sign up to our newsletter for regular updates on the world of Amazon,{" "}
      <ECommerce /> tips, our upcoming webinars, and more straight to your
      inbox!
    </p>
    <iframe
      src="//go.e-comas.com/l/885733/2024-07-25/nc1ft?Single_Opt_In=yes"
      width="768"
      height="210"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  </section>
);
