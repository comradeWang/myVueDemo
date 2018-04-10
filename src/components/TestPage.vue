<template>
  <div id="testPage">
    <input type="text" v-model="name">
    <h1>{{this.name}}</h1>
  </div>
</template>

<script>
  export default {
    name: "TestPage",
    data() {
      return {
        name:"这是一个路由的测试页"
      }
    }
  }
</script>

<style scoped>

</style>
