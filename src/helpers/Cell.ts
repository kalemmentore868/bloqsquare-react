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
}