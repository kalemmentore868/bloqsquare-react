export default class Player {
  chosenColor: string;
  totalPoints: number;
  isComputer: boolean;
  totalGamePoints: number;

  constructor(chosenColor: string, isComputer: boolean = false) {
    this.chosenColor = chosenColor;
    this.totalPoints = 0;
    this.totalGamePoints = 0;
    this.isComputer = isComputer;
  }
}
