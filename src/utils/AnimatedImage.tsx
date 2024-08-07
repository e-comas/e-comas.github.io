import { h } from "@aduh95/async-jsx";
import Picture from "./Picture.tsx";
import type { PictureProps } from "./Picture.tsx";

interface AnimatedImageProps extends PictureProps {
  children?: any[];
  ref?: any;
}

export default (props: AnimatedImageProps) =>
  h(Picture as any, { ...props, src: props.src + "#animated" } as any).then(
    (elem) => {
      (elem as HTMLElement).dataset.animated = "true";
      return elem;
    }
  ) as any as JSX.Element;
