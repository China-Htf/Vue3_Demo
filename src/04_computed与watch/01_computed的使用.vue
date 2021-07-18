<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changName">修改</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const firstName = ref("Htf");
    const lastName = ref("sss");

    // 1. 传入一个 getter函数
    // const fullName = computed(() => {
    //   return firstName.value + " " + lastName.value;
    // });

    // 2. 传入一个对象 包含 getter/setter
    const fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set(newValue) {
        const name = newValue;
        firstName.value = name
      }
    })

    const changName = () => {
      fullName.value = 'www'
    }

    return {
      fullName,
      changName
    };
  },
};
</script>

<style scoped>
</style>