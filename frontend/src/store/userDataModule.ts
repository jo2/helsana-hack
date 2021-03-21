import {UserData} from 'src/models/UserData';
import {date} from 'quasar';

const userDataModule = {
  state: {
    uuid: undefined as string | undefined,
    data: undefined as UserData | undefined
  },
  mutations: {
    setUser (state: {uuid: string | undefined, data: UserData | undefined}, uuid: string) {
      state.uuid = uuid;
    },
    setData (state: {uuid: string | undefined, data: UserData | undefined}, data: UserData) {
      state.data = data;
    },
    clearUser (state: {uuid: string | undefined, data: UserData | undefined}) {
      state.uuid = undefined;
      state.data = undefined;
    }
  },
  getters: {
    getUuid (state: {uuid: string | undefined, data: UserData | undefined}) {
      return state.uuid;
    },
    getData (state: {uuid: string | undefined, data: UserData | undefined}) {
      return state.data;
    },
    isAuthenticated (state: {uuid: string | undefined, data: UserData | undefined}) {
      return !!state.uuid;
    },
    calculateEmojiByDay: (
      state: {uuid: string | undefined, data: UserData | undefined},
      getters: any
    ) => (currentDate: Date): string => {
      const userData = state.data;
      const possibleGifs = [];

      if (userData?.sleepEntries) {
        let sleep = 0;
        userData.sleepEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).forEach(entry => {
          const diff = date.getDateDiff(entry.end, entry.start, 'minutes');
          sleep += diff;
        });
        if (sleep < 7 * 60) {
          possibleGifs.push('tired');
        }
      }

      if (getters.calculateScoreByDay(currentDate) > 30) {
        possibleGifs.push('winner');
      }

      if (userData?.stepEntries) {
        let steps = 0;
        userData.stepEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).forEach(entry => {
          steps += entry.stepCount;
        });
        if (steps > 10000) {
          possibleGifs.push('sportive')
        }
      }

      if (possibleGifs.length === 0) {
        return 'defaultVideo';
      } else {
        return possibleGifs[Math.floor(Math.random() * possibleGifs.length)];
      }
    },
    calculateScoreByDay: (state: {uuid: string | undefined, data: UserData | undefined}) => (currentDate: Date): number =>  {
      let score = 0;
      const userData = state.data;

      // bmi
      if (userData?.bmiEntry && userData?.bmiEntry.calculateBmi() > 18.5 && userData?.bmiEntry.calculateBmi() < 24.9) {
        score += 15;
      }

      // steps
      if (userData?.stepEntries) {
        let steps = 0;
        userData.stepEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).forEach(entry => {
          steps += entry.stepCount;
        });
        let stepScore = 0;
        if (steps > 5000 && steps < 10000) {
          stepScore = 10 + Math.round((steps - 5000) / 500);
        }
        if (steps > 10000) {
          stepScore = 20;
        }
        score += stepScore;
      }

      // sleep
      if (userData?.sleepEntries) {
        let sleep = 0;
        let deep = 0;
        let rem = 0;
        userData.sleepEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).forEach(entry => {
          const diff = date.getDateDiff(entry.end, entry.start, 'minutes');
          sleep += diff;
          if (entry.stage === 40003) {
            deep += diff;
          }
          if (entry.stage === 40004) {
            rem += diff;
          }
        });
        const sleepScore = Math.round(sleep / (7 * 60)) + Math.round(deep / 80) + Math.round(rem / 60);
        score += sleepScore;
      }

      // calories
      if (userData?.calorieBurnedEntries) {
        let calories = 0;
        userData.calorieBurnedEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).forEach(entry => {
          calories += entry.activeCalorie;
        });
        if (calories > 300) {
          score += 15;
        }
      }

      // pulse
      if (userData?.pulseEntries) {
        if (userData.pulseEntries.filter(entry => date.isSameDate(entry.created, currentDate, 'day')).length > 0) {
          score += 20;
        }
      }

      return score;
    }
  }
}

export default userDataModule;
