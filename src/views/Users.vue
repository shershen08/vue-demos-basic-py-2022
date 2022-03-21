<template>
    <button @click="setCounterValue">setCounterValue to 100</button>

  <h1>users list</h1>
  <div v-for="user in users" :key="user.id">
      <h3>{{user.name}}</h3>
      <router-link :to="`/users/${user.id}`">open details</router-link>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  // v3
  setup() {
    const users = ref([]);
    const store = useStore();

    const setCounterValue = () => {
      store.commit('setToValue', 100);
    };

    const loadData = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((json) => {
          users.value = json;
        });
    };

    onMounted(() => {
      loadData();
    });

    return {
      users,
      setCounterValue
    };
  },
};
</script>

<style>

</style>
