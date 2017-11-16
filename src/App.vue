
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <hello></hello>
    <!--<p>-->
      <!--<router-link to="/view1">Go to view1</router-link>-->
      <!--<router-link to="/view2">Go to view2</router-link>-->
    <!--<p/>-->
    <!--<router-view></router-view>-->
    <router-view name="view1"></router-view>

    <div>
      <button v-on:click="importInfo">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>

    <div>
      <input type="text" @keyup="input" v-model="input2">
      <p>输入：{{ msg }}</p>
    </div>
  </div>

</template>

<script>
import Hello from './components/HelloWorld'

export default {
    name: 'app',
    components: {
      Hello
    },
    data () {
      return {
        counter: 0,
        msg:'',
        input2:'',
        url: this.serverIp + '/drip/testController/saveTest.json'
      }
    },
    methods:{
      input:function(){
        this.msg = this.input2
      },
      count:function(){
        this.counter = this.counter+1
      },
      importInfo:function(){
//        $ajax.post(this.url, this.info, {
//          headers: {
//            'Content-Type': 'application/json'
//          }
//        }).then(function (response) {
//            console.log(response);
//          }).catch(function (error) {
//            console.log(error);
//          });
        this.$ajax({
          method: 'post',
          url: this.url,
          data: {
              "productCode":"PC0011005",
              "poolCode":"QJS20171013"
          }
        }).then(function (response) {
            console.log(response.data);
            this.msg = response.data;
          }.bind(this))
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
