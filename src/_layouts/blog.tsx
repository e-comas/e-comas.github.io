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
    <main id="main-content">
      <h2>{"{{ page.title | escape }}"}</h2>
      <div class="publishing-info">
        <time dateTime={'{{ page.date | date: "%Y-%m-%dT%H:%M:%S" }}'}>
          {'{{ page.date | date: "%a, %b %d, %Y" }}'}
        </time>
        {" – Written by {{ page.author | escape }}"}
      </div>
      {"{{ content }}"}
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
