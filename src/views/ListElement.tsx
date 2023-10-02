import { h } from "@aduh95/async-jsx";

import "./ListElement.scss";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChess } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string | JSX.Element;
  desc: string | JSX.Element;
  centered?: boolean;
  invertSVG?: boolean;
  icon?: IconProp;
  children?: any;
}

export default (props: Props | undefined, children: JSX.Element[]) => (
  <section
    role="listitem"
    class={
      "animatable card" + (props?.centered ?? true ? " centered_card" : "")
    }
  >
    <FontAwesomeIcon
      size="3x"
      icon={props?.icon || (faChess as IconProp)}
      class={props?.invertSVG ?? false ? "inverted_svg" : ""}
    />
    <h4 id="title">{props?.title}</h4>
    <p id="desc">{props?.desc}</p>
    {...children.splice(0)}
  </section>
);
