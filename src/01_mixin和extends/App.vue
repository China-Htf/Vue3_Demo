<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixin/demoMixin'
  export default {
    mixins: [demoMixin],
    data() {  
      return {
        title: 'Hello World',
        message: 'Hello App'
      }
    },
  }
</script>

<style scoped>

</style>