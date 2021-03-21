import {UserData} from 'src/models/UserData';
import {BmiEntry} from 'src/models/BmiEntry';
import {CalorieBurnedEntry} from 'src/models/CalorieBurnedEntry';
import {PulseEntry} from 'src/models/PulseEntry';
import {SleepEntry} from 'src/models/SleepEntry';
import {StepEntry} from 'src/models/StepEntry';

export async function loadUserData(id: string): Promise<UserData> {
  const response = await fetch(`http://localhost:8080/userdata?uuid=${id}`, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  const data = await response.json();
  return format(data, id);
}

function format(data: any, userId: string): UserData {
  const bmiEntry = new BmiEntry(data.bmiEntry.id, data.bmiEntry.weight, data.bmiEntry.height);
  const caloriesBurnedEntries = data.calorieBurnedEntries.map((entry: any) => new CalorieBurnedEntry(
    entry.id,
    entry.created,
    entry.activeTime,
    entry.restCalorie,
    entry.activeCalorie
  ));
  const pulseEntries = data.pulseEntries.map((entry: any) => new PulseEntry(
    entry.id,
    entry.created,
    entry.start,
    entry.end,
    entry.pulse
  ));
  const sleepEntries = data.sleepEntries.map((entry: any) => new SleepEntry(
    entry.id,
    entry.created,
    entry.start,
    entry.end,
    entry.stage
  ));
  const stepEntries = data.stepEntries.map((entry: any) => new StepEntry(
    entry.id,
    entry.created,
    entry.stepCount,
    entry.activeTime,
    entry.recommendation,
    entry.runStepCount,
    entry.speed,
    entry.distance,
    entry.calorie,
    entry.walkStepCount,
    entry.dayTime
  ));
  return new UserData(userId, bmiEntry, caloriesBurnedEntries, pulseEntries, sleepEntries, stepEntries);
}
