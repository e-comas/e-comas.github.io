import { h } from "@aduh95/async-jsx";

import "runtime:./AnimatedFigures/runtime-animation.ts";
import createNumberFormatter from "./AnimatedFigures/createNumberFormatter.ts";

interface AnimatedFigureProps {
  tagName?: string;
  countTo: number;
  currency?: string;
  ref?: any;
  children?: any[];
}

export default (props: AnimatedFigureProps) =>
  h(
    props.tagName || "span",
    {
      "data-count-to": props.countTo as any,
      "data-currency": props.currency,
      ref: props.ref,
    },
    createNumberFormatter(props.countTo, props.currency).format(props.countTo)
  ) as JSX.Element;
