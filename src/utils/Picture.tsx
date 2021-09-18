import { h } from "@aduh95/async-jsx";

interface PictureProps {
  class?: string;
  /** @deprecated */
  className?: string;
  src: string;
  alt: string;
}

export default (props: PictureProps) => (
  <picture class={props.class || props.className}>
    <img
      src={props.src}
      alt={props.alt}
      class={props.class || props.className}
    />
  </picture>
);
