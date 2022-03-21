<template>

  <button @click="onClickBack">to users list</button>

  user profile {{userId}}

  <hr>
  {{user}}
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import useUser from '@/hooks/user';

export default {
  beforeRouteEnter() {
  },
  beforeRouteLeave() {
  },
  props: [
    'id',
  ],
  setup(props) {
    const router = useRouter();

    const onClickBack = () => {
      // window.history.back()
      router.push({
        name: 'users',
      });
    };

    return {
      userId: props.id,
      user: useUser(props.id),
      onClickBack,
    };
  },
};
</script>

<style>

</style>
