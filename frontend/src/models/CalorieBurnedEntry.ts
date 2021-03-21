export class CalorieBurnedEntry {
  id: string;
  created: Date;
  activeTime: number;
  restCalorie: number;
  activeCalorie: number;

  constructor(id: string, created: Date, activeTime: number, restCalorie: number, activeCalorie: number) {
    this.id = id;
    this.created = created;
    this.activeTime = activeTime;
    this.restCalorie = restCalorie;
    this.activeCalorie = activeCalorie;
  }
}
