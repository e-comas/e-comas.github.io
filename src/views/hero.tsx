import { h } from "@aduh95/async-jsx";
import "./hero.scss";

interface HeroProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  captionClass?: string;
  imgClass?: string;
}
export default (props: HeroProps | undefined, children: any[]) => {
  const className = "hero " + (props?.class || props?.className || "");
  return h(
    "div",
    {
      ...props,
      className,
      class: undefined,
      tagName: undefined,
      src: undefined,
    } as any,
    [...children.splice(0)]
  ) as JSX.Element;
};
