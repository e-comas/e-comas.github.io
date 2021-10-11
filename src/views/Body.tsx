import { h, Fragment } from "@aduh95/async-jsx";
import "./body.scss";

interface BodyProps {
  title?: string;
  children?: any[];
}

export default (props: BodyProps | null, children: any[]) => {
  if (props != null && Object.hasOwn(props, "title")) {
    document.title += " – " + props.title;
  }
  return h(Fragment, {} as any, children) as any as JSX.Element;
};

Object.hasOwn ??= Function.prototype.call.bind(Object.prototype.hasOwnProperty);

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

  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allowfullscreen?: boolean;
    allowtransparency?: boolean;
    frameborder?: string;
  }
}
