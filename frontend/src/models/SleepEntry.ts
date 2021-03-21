export class SleepEntry {
  id: string;
  created: Date;
  start: Date;
  end: Date;
  stage: number;

  constructor(id: string, created: Date, start: Date, end: Date, stage: number) {
    this.id = id;
    this.created = created;
    this.start = start;
    this.end = end;
    this.stage = stage;
  }
}
