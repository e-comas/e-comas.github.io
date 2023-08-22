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
  const className = "intro " + (props?.class || props?.className || "");
  return h(
    "figure",
    {
      ...props,
      className,
      class: undefined,
      tagName: undefined,
      src: undefined,
    } as any,
    [
      <figcaption class={props?.captionClass ?? ""}>
        {...children.splice(0)}
      </figcaption>,
      <img src="/images/Earth.svg" class={props?.imgClass ?? ""}></img>,
    ]
  ) as JSX.Element;
};
