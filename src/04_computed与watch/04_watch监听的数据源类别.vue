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
    const info = reactive({name: 'Htf', age: 18})

    // 1. 侦听 watch 时，传入一个 getter 函数
    // watch(() => info.name, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue);
    // })

    // 2. 传入一个响应式对象： reactive对象/ref对象
    // 情况一： reactive 对象获取到的 newValue 和 oldValue 本身都是 reactive 对象
    // watch(info, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue);
    // })

    // 若希望是一个普通对象
    watch(() => {
      return {
        ...info
      }
    }, (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue);
    })

    // 情况二: ref 对象获取 newValue 和 oldValue 是 value 本身
    // const name = ref('Htf')
    // watch(name, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue);
    // })
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