import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture.tsx";

import "./Partners.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title?: string;
  class?: string;
  id?: string;
}

export default (props: Props | undefined, children: JSX.Element[]) => (
  <section
    class={"partners " + props?.class ?? ""}
    id={props?.id != null ? props?.id : undefined}
  >
    <h2>{props?.title ?? "Our Partners"}</h2>
    {...children.splice(0)}
  </section>
);
