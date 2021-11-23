import { h } from "@aduh95/async-jsx";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.js";

import "./VideoEmbedLink.scss";
import "runtime:./video-embed-runtime.js";

interface VideoEmbedLinkProps {
  tagName?: string;
  previewImage: string;
  previewIcon?: string;
  videoId: string;
  children?: any[];
  ref?: any;
}

export default (props: VideoEmbedLinkProps) => (
  <ElementWithBackgroundImage
    tagName={props.tagName || "div"}
    src={props.previewImage}
    class="video-link"
  >
    <a
      href={`https://www.youtube.com/watch?v=${props.videoId}`}
      data-embed={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&amp;playsinline=1`}
      target="_blank"
      rel="noopener"
      title="Watch on YouTube"
    >
      Play video on YouTube
    </a>
    {props.previewIcon != null ? (
      <img
        src={props.previewIcon}
        alt=""
        aria-hidden="true"
        class="preview-icon"
      />
    ) : null}
  </ElementWithBackgroundImage>
);
