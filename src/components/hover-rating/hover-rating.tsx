import { Component, Prop, h, State} from '@stencil/core';

@Component({
  tag: "mouse-hover-rating",
  styleUrl: "hover-rating.css",
  shadow: true
})
export class HoverRating {
  @Prop() maxValue: number = 5;
  @Prop() value: number = 0;

  @State() starList: Array<object> = [];
  @State() internalValue: number;

  componentWillLoad() {
    this.createStarList(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.internalValue);
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(
          <span
            class="rating"
            onMouseOver={() => this.createStarList(i)}
            onMouseOut={() => this.createStarList(this.internalValue)}
            onClick={() => this.setValue(i)}
          >
            &#x2605;
          </span>
        );
      } else {
        starList.push(
          <span
            class="rating"
            onMouseOver={() => this.createStarList(i)}
            onMouseOut={() => this.createStarList(this.internalValue)}
            onClick={() => this.setValue(i)}
          >
            &#x2606;
          </span>
        );
      }
    }

    this.starList = starList;

  }
  render() {
    return <div>{this.starList}</div>;
  }
}
