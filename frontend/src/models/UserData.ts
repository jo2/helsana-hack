import {CalorieBurnedEntry} from "src/models/CalorieBurnedEntry";
import {PulseEntry} from "src/models/PulseEntry";
import {SleepEntry} from "src/models/SleepEntry";
import {StepEntry} from "src/models/StepEntry";
import {BmiEntry} from "src/models/BmiEntry";

export class UserData {
  userId: string;
  bmiEntry: BmiEntry;
  calorieBurnedEntries: CalorieBurnedEntry[];
  pulseEntries: PulseEntry[];
  sleepEntries: SleepEntry[];
  stepEntries: StepEntry[];

  constructor(userId: string, bmiEntry: BmiEntry, calorieBurnedEntries: CalorieBurnedEntry[], pulseEntries: PulseEntry[],
              sleepEntries: SleepEntry[], stepEntries: StepEntry[]) {
    this.userId = userId;
    this.bmiEntry = bmiEntry;
    this.calorieBurnedEntries = calorieBurnedEntries;
    this.pulseEntries = pulseEntries;
    this.sleepEntries = sleepEntries;
    this.stepEntries = stepEntries;
  }
}
