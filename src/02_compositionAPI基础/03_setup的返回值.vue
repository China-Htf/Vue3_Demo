<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="increment"> +1 </button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = 100;
    // 局部函数
    const increment = () => {
      counter++;
      console.log(counter);
    };
    return {
      title: "Hello setup",
      counter,
      increment
    };
  },
};
</script>

<style scoped>
</style>