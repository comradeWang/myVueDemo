<template>
  <div id="axiosTest">
    <h3>Vue 新闻（axios 测试）</h3>
    <Button type="primary" shape="circle" icon="ios-search" @click="show"></Button>
    <Button>Default</Button>
  </div>
</template>

<script>
  export default {
    name: "axiosTest",
    data() {
      return {

      }
    },
    methods:{
      show(){
        this.axios({
          methods:'post',
          url:'/ssm/ssmD/logs/getAll',
          data:{}
        }).then(function (response) {
          console.log(response.data.result[0]);
        })
      }
    }
  }
</script>

<style scoped>

</style>
