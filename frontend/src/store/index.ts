import Vue from 'vue';
import Vuex from 'vuex';
import userDataModule from 'src/store/userDataModule';

export interface StoreInterface {
  example: unknown;
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    uuid: userDataModule
  }
});

export default store;
