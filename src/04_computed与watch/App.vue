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
    const info = reactive({
      name: 'Htf', 
      age: 18,
      friend: {
        name: 'www'
      }
    })

    // 2. 侦听器 watch
    watch(info, (newInfo, oldInfo) => {
      console.log(newInfo, oldInfo);
    })
    const changeData = () => {
      info.friend.name = 'ppp'
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