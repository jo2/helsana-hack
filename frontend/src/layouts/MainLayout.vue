<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar class="flex-toolbar">
        <q-toolbar-title>
          Helsana Hack
        </q-toolbar-title>

        <div v-if="$store.getters.isAuthenticated">
          <q-btn flat @click="signOut" icon-right="logout" label="Logout"/>
        </div>

        <div v-if="!$store.getters.isAuthenticated">
          <q-btn flat to="/login" icon-right="login" label="Login"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="js">
/* eslint-disable @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-return,
  @typescript-eslint/no-empty-function,
  @typescript-eslint/restrict-template-expressions,
  @typescript-eslint/no-unsafe-call */
import {t} from 'src/i18n/i18n';
import store from 'src/store';

export default {
  name: 'MainLayout',
  data() {
    return {
      t
    };
  },
  methods: {
    signOut: function() {
      store.commit('clearUser');
      this.$router.push({path: '/login'})
    }
  }
};
</script>

<style scoped lang="scss">
.flex-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.color-primary {
  color: $primary;
}

.min-width {
  width: min-content;
}
</style>
