<template>
  <div class="q-ma-md">
    <div>
      <video :src="require(`../assets/${$store.getters.calculateEmojiByDay(currentDate)}.mp4`)" loop="true" autoplay="true" class="gif"/>
    </div>

    <div>
      {{ score }}

      <q-avatar>
        <q-icon name="mood" class="text-lg" v-if="score > 30"/>
        <q-icon name="sentiment_satisfied" class="text-lg" v-if="score >= 15 && score <= 30"/>
        <q-icon name="mood_bad" class="text-lg" v-if="score < 15"/>
      </q-avatar>
    </div>

    <div>
      <q-date v-model="currentDate" class="width-auto"/>
    </div>
  </div>
</template>

<script lang="js">
import tired from '../assets/tired.mp4';
import sportive from '../assets/sportive.mp4';
import winner from '../assets/winner.mp4';
import defaultVideo from '../assets/default.mp4';

export default {
  name: 'Index',
  setup () {
    let currentDate = Date.now();

    return {
      currentDate
    }
  },
  computed: {
    score: function () {
      return this.$store.getters.calculateScoreByDay(this.currentDate);
    },
    video: function () {
      let gif;
      switch (this.$store.getters.calculateEmojiByDay(this.currentDate)) {
        case 'defaultVideo': gif = defaultVideo; break;
        case 'tired': gif = tired; break;
        case 'winner': gif = winner; break;
        case 'sportive': gif = sportive; break;
        default: gif = defaultVideo; break;
      }

      return {
        video: {
          sources: [
            {
              src: gif,
              type: 'video/mp4'
            }
          ]
        }
      };
    }
  }
};
</script>

<style scoped>
.text-lg {
  font-size: 1.5rem;
}

.width-auto {
  width: auto;
}

.gif {
  width: -moz-available;
  width: available;
  width: -webkit-available;
  height: 15rem;
}
</style>
