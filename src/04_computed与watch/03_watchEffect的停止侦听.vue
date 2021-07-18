<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="changName">修改</button>
    <button @click="changAge">+1</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const name = ref("Htf");
    const age = ref(18);

    // watchEffect: 自动收集响应式的依赖
    // 若不写 age 此时 age 的修改将不再进行监听
    const stop = watchEffect(() => {
      console.log("name", name.value, "age", age.value);
    });

    const changName = () => {
      name.value = "www";
    };
    const changAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changName,
      changAge,
      stop
    };
  },
};
</script>

<style scoped>
</style>