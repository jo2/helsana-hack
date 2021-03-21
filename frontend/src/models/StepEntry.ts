export class StepEntry {
  id: string;
  created: Date;
  stepCount: number;
  activeTime: number;
  recommendation: number;
  runStepCount: number;
  speed: number;
  distance: number;
  calorie: number;
  walkStepCount: number;
  dayTime: number;

  constructor(id: string, created: Date, stepCount: number, activeTime: number, recommendation: number, runStepCount: number,
              speed: number, distance: number, calorie: number, walkStepCount: number, dayTime: number) {
    this.id = id;
    this.created = created;
    this.stepCount = stepCount;
    this.activeTime = activeTime;
    this.recommendation = recommendation;
    this.runStepCount = runStepCount;
    this.speed = speed;
    this.distance = distance;
    this.calorie = calorie;
    this.walkStepCount = walkStepCount;
    this.dayTime = dayTime;
  }
}
