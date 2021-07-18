<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.age }}</h2>
    <button @click="changeData">修改</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    // 定义可响应式对象
    const info = reactive({name: 'Htf', age: 18})
    const name = ref('htf')

    // 2. 侦听器 watch
    watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName);
    })
    const changeData = () => {
      info.name = 'www'
    }
    return {
      info,
      changeData
    };
  },
};
</script>

<style scoped>
</style>