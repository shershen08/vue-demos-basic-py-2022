<template>
  <p class="app-user-name">
        <slot></slot>
        {{name}}
        <slot name="suffix"></slot>
  </p>
</template>

<script>
export default {
  name: 'UserName',
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style>
    .highlight {
        background: gold;
        color: aliceblue;
    }
</style>
