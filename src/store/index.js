import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  state: {
    count: 67,
  },
  getters: {
    getCount() {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setToValue(state, value) {
      state.count = value;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
});

export default store