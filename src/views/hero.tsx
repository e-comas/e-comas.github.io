import { h } from "@aduh95/async-jsx";
import "./hero.scss";

export var entityClasses = {
  "group": "group",
  "marketplace": "marketplace",
  "distribution": "distribution",
  "technology": "technology",
  "digital Marketing": "digital-marketing"
};
interface HeroProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  entity?: string;
  captionClass?: string;
  imgClass?: string;
}
export default (props: HeroProps | undefined, children: any[]) => {
  const entity = props?.entity || "group";
  const className = "hero " + (props?.class || props?.className || "") + " " + entity;
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
