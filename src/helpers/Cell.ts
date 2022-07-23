export default class Cell {
  index: number;
  isClicked: boolean;
  backgroundColor: string;

  constructor(
    index: number,
    isClicked = false,
    backgroundColor: string = "transparent"
  ) {
    this.index = index;
    this.isClicked = isClicked;
    this.backgroundColor = backgroundColor;
  }

//   setBackgroundColor(square: HTMLDivElement) {
//     if (this.isClicked) {
//       square.style.backgroundColor = this.backgroundColor;
//       square.classList.add("clicked");
//     } else {
//       this.backgroundColor = "white";
//       square.style.backgroundColor = this.backgroundColor;
//     }
//   }
}