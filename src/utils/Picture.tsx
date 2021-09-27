import { h } from "@aduh95/async-jsx";

interface PictureProps {
  class?: string;
  /** @deprecated */
  className?: string;
  src: string;
  alt: string;
  lossless?: boolean;
  children?: any[];
}

export default (props: PictureProps) => (
  // Using a div is necessary to workaround Safari interpretation of the spec
  // https://stackoverflow.com/questions/44770074/css-grid-row-height-safari-bug
  <div>
    <picture class={props.class || props.className}>
      <img src={props.src} alt={props.alt} data-lossless={props.lossless} />
    </picture>
  </div>
);
