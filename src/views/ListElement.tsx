import { h } from "@aduh95/async-jsx";

import "./ListElement.scss"

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChess } from "@fortawesome/free-solid-svg-icons";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
  desc: string;
  icon?: IconProp;
}

export default (props: Props | undefined) => (
  <section role="listitem" class="animatable card">
    <FontAwesomeIcon size="3x" icon={props?.icon || (faChess as IconProp)} />
    <h4>{props?.title}</h4>
    <p>{props?.desc}</p>
  </section>
);
