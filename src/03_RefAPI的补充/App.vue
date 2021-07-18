<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="increnment">+1</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const state = reactive({ name: "Htf", age: 18 });
    // 1. toRefs: 将 reactive 对象中的所有属性都转成 ref 建立连接
    // let { name, age } = toRefs(state);
    
    // 2. toRef: 对其中一个属性转成 Ref 建立连接
    let name = toRef(state, 'name')
    let age = toRef(state, 'age')
    const increnment = () => {
      state.age++;
    };
    return {
      name,
      age,
      increnment,
    };
  },
};
</script>

<style scoped>
</style>