import { h } from "@aduh95/async-jsx";

import "./Breadcrumbs.scss";

interface BreadcrumbsProps {
  pageTitle: string;
}
export default (props: BreadcrumbsProps) => (
  <ul class="breadcrumbs">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/services.html">Services</a>
    </li>
    <li>{props.pageTitle}</li>
  </ul>
);
