import Cell from "./Cell";

export default class Grid2 {
  rowList: Array<Array<Cell>>;
  cols: number;
  rows: number;
  numberOfCells: number;
  numberOfUnlickedCells: number;
  allCells: Cell[];

  constructor(cols: number, rows: number) {
    this.cols = cols;
    this.rows = rows;
    this.numberOfCells = cols * rows;
    this.numberOfUnlickedCells = this.numberOfCells;
    this.rowList = [];
    this.allCells = [];

    let count = 0;
    let row = [];

    for (let i = 0; i < this.numberOfCells; i++) {
      let cell = new Cell(i);
      this.allCells.push(cell);
      row.push(cell);
      count++;
      if (count === cols) {
        this.rowList.push(row);
        row = [];
        count = 0;
      }
    }
  }
}
