import { Fragment } from "@aduh95/async-jsx";
import "./body.scss";

const Body = Fragment as any;
export default Body;

declare global {
  namespace JSX {
    interface Element
      extends Promise<DocumentFragment | HTMLElement | SVGElement> {}
  }
}
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
}
