import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const useUser = (id) => {
  const route = useRoute();
  const user = ref({});

  const loadData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        user.value = json;
      });
  };

  onMounted(() => {
    loadData();
  });

  return {
    user,
  };
};

export default useUser;
