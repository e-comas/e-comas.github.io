import { h } from "@aduh95/async-jsx";

import "./flipCard.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
  desc: string;
  number: number;
}

export default (props: Props | undefined) => (
  <div class="flip_card">
    <div class="card_head">
      <h1>
        {props?.number}
        <p>{props?.title}</p>
      </h1>
    </div>
    <p class="card_tail">{props?.desc}</p>
  </div>
);
