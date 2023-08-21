import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./global-expansion.scss";

export default (
  <Body title="Global Expansion">
    <Header />
    
    <Footer />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`layout: none`
  )
);
