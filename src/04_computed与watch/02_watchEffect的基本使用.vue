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


    const changName = () => {
      name.value = 'www'
    }
    const changAge = () => {
      age.value++
    }

    // watchEffect: 自动收集响应式的依赖
    // 若不写 age 此时 age 的修改将不再进行监听
    watchEffect(() => {
      console.log('name', name.value, 'age', age.value);
    })
    return {
      name,
      age,
      changName,
      changAge
    };
  },
};
</script>

<style scoped>
</style>