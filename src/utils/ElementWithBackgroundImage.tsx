import { h } from "@aduh95/async-jsx";

import "./ElementWithBackgroundImage.scss";

// @ts-ignore
export default (props, children) => {
  const className =
    (props.class || props.className || "") + " background-wrapper";
  return h(
    props.tagName,
    {
      ...props,
      className,
      class: undefined,
      tagName: undefined,
      src: undefined,
    },
    [
      <picture class="background" aria-hidden="true">
        <img src={props.src} alt="background" />
      </picture>,
      ...children,
    ]
  ) as JSX.Element;
};
