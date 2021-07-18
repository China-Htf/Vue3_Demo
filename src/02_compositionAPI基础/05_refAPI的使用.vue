<template>
  <div>
    <!-- 当我们在 template 模板中使用 ref 对象，它会自动解包 -->
    <h2>{{ counter }}</h2>
    <button @click="increment"> +1 </button>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup() {
    
    let counter = ref(100)

    // 局部函数
    const increment = () => {

      // 方法中调用 ref 时，没有自动解包，需要加上 value
      counter.value++;
      console.log(counter);
    };
    return {
      counter,
      increment
    };
  },
};
</script>

<style scoped>
</style>