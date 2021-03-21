export class PulseEntry {
  id: string;
  created: Date;
  start: Date;
  end: Date;
  pulse: number;

  constructor(id: string, created: Date, start: Date, end: Date, pulse: number) {
    this.id = id;
    this.created = created;
    this.start = start;
    this.end = end;
    this.pulse = pulse;
  }
}
