import { h } from "@aduh95/async-jsx";

import "./ElementWithIcon.scss";

interface ElementWithIcon
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  tagName: string;
  src: string;
}

export default (props: ElementWithIcon, children: any[]) => {
  const className =
    (props.class || props.className || "") + " element-with-icon";
  return h(
    props.tagName,
    {
      ...props,
      className,
      class: undefined,
      tagName: undefined,
      src: undefined,
    } as any,
    [
      h("div", {} as any, [
        <img src={props.src} alt="illustration" aria-hidden="true" />,
        ...children,
      ]),
    ]
  ) as JSX.Element;
};
