export class BmiEntry {
  id: string;
  weight: number;
  height: number;

  constructor(id: string, weight: number, height: number) {
    this.id = id;
    this.weight = weight;
    this.height = height;
  }

  calculateBmi(): number {
    return (this.weight / ((this.height * this.height / 10000)));
  }
}
