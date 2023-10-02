import { h } from "@aduh95/async-jsx";

import "./flipCard.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
  desc: string | JSX.Element;
}

export default (props: Props | undefined) => (
  <div class="flip_card safariActive">
    <h5 class="card_head">{props?.title}</h5>
    <p class="card_tail">{props?.desc}</p>
  </div>
);
