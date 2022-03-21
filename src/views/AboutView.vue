<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>count: {{count}}</p>
    <button @click="increment">increment</button>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const increment = () => {
      store.commit('increment');
    };

    return {
      count: computed(() => store.state.count),
      increment,
    };
  },
};
</script>
