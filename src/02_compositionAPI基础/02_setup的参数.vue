<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello data",
      counter: 101,
    };
  },
  setup() {
    //	setup 返回值
    return {
      title: "Hello setup",
      counter: 100,
    };
  },
};
</script>

<style scoped>
</style>