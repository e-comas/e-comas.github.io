import { h, Fragment } from "@aduh95/async-jsx";
import "./body.scss";

interface BodyProps {
  title?: string;
  children: JSX.Element[];
}

export default (props: BodyProps, children: any[]) => {
  if (Object.hasOwn(props, "title")) {
    document.title += " – " + props.title;
  }
  return h(Fragment, {} as any, children) as any as JSX.Element;
};

declare global {
  namespace JSX {
    interface Element
      extends Promise<DocumentFragment | HTMLElement | SVGElement> {}
  }

  interface Object {
    hasOwn(object: any, key: string | Symbol): boolean;
  }
}
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
}
