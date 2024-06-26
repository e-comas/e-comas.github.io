import { h } from "@aduh95/async-jsx";

import Body from "../views/Body.tsx";
import Header from "../views/Header.tsx";
import Breadcrumbs from "../views/Breadcrumbs.tsx";
import Footer from "../views/Footer.tsx";

import "./blog.scss";
import Newsletter from "../views/newsletter.tsx";

export default (
  <Body title="{{ page.title }}">
    <Header />
    {/* <Breadcrumbs /> */}
    <div class="blog-page">
      <main id="main-content">
        <h2>{"{{ page.title | escape }}"}</h2>
        <div class="publishing-info">
          <time dateTime={"{{ page.date | date: '%Y-%m-%dT%H:%M:%S' }}"}>
            {'{{ page.date | date: "%a, %b %d, %Y" }}'}
          </time>
          {" – Written by {{ page.author | escape }}"}
        </div>
        {"{{ content }}"}        
      </main>
      <aside>
        <Newsletter />
      </aside>
    </div>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
