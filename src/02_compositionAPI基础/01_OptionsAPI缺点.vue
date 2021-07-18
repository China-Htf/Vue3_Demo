<template>
  <div>
    <h2>当前数字:{{ counter }}</h2>
    <h2 >翻倍数字:{{ doubleCounter }}</h2>
    <button @click="increment"> +1 </button>
    <button @click="decrement"> -1 </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter ++
      },
      decrement() {
        this.counter --
      }
    },
    computed: {
      doubleCounter() {
        return this.counter * 2
      }
    }
  }
</script>

<style scoped>

</style>