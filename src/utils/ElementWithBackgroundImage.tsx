import { h } from "@aduh95/async-jsx";

import "./ElementWithBackgroundImage.scss";

interface ElementWithBackgroundImageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  tagName: string;
  src: string;
}

export default (props: ElementWithBackgroundImageProps, children: any[]) => {
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
    } as any,
    [
      <picture class="background" aria-hidden="true">
        <img src={props.src} alt="background" />
      </picture>,
      ...children,
    ]
  ) as JSX.Element;
};
