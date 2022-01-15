import { h } from "@aduh95/async-jsx";

import Body from "../views/Body.js";
import Header from "../views/Header.js";
import Breadcrumbs from "../views/Breadcrumbs.js";
import Footer from "../views/Footer.js";

import "./blog.scss";

export default (
  <Body title="{{ page.title }}">
    <Header />
    <Breadcrumbs />
    <main>
      <h2>{"{{ page.title }}"}</h2>
      <p>{"{{ page.date }} - Written by {{ page.author }}"}</p>
      {"{{ content }}"}
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
