<template>
  <div >
    <h1>我是View1</h1>
    <div v-for="item in items">
      {{item.name}}:{{item.sex}}
    </div>
  </div>

</template>

<script>

  export default {
    name: 'view1',
    data (){
      return{
        items:[{name:"1",sex:"2"}]
      }
    }
  }

</script>

<style>
</style>
