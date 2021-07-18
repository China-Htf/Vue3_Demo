<template>
  <div>
    <h2>{{ state.counter }}</h2>
    <button @click="increment"> +1 </button>
  </div>
</template>

<script>

import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      counter: 100
    })
    // 局部函数
    const increment = () => {
      state.counter++;
      console.log(state.counter);
    };
    return {
      state,
      increment
    };
  },
};
</script>

<style scoped>
</style>