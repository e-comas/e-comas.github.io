import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";
import GDocs from "./utils/GDoc.js";

import "./index.scss";

export default (
  <Body title="Strategy">
    <Header />
    <Breadcrumbs />
    <GDocs
      tagName="main"
      documentId="1UaxxBWgWZmWdBMdq2EAXIvTq5k5_Gwwjjv9bkidTBAw"
    />
    <Footer />
  </Body>
).then((e) => document.body.append(e));
