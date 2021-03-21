<template>
  <q-page class="flex justify-center items-center column">
    <q-card class="column height-fit-content">
      <q-card-section class="row">
        <q-input outlined v-model="uuid" label="UUID"/>
      </q-card-section>

      <q-card-section class="row justify-between">
        <q-btn color="primary" unelevated @click="login" label="Login"/>

        <div v-if="isLoading">
          <q-spinner color="primary" size="3em"/>
        </div>
      </q-card-section>

      <q-card-section v-if="error">
        {{ error }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {loadUserData} from "../services/userDataService";

export default {
  name: 'Login',
  data() {
    let uuid = '';
    let error = '';
    let isLoading = false;

    const login = async () => {
      this.isLoading = true;
      const data = await loadUserData(this.uuid);
      this.isLoading = false;
      if (data) {
        this.$store.commit('setUser', this.uuid);
        this.$store.commit('setData', data);
        await this.$router.push({path: '/'});
      } else {
        this.error = 'invalid'
      }
    }

    return {
      uuid,
      error,
      isLoading,
      login
    };
  },
}
</script>

<style scoped>
.height-fit-content {
  height: fit-content;
  height: -moz-fit-content;
}

.set-width {
  width: 20rem;
}

.q-btn {
  border-radius: 0;
  margin-right: 10px;
  padding: 0 10px;
}
</style>
