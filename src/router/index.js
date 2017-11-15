import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import router from './router.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/view1',
      component: View1
    },
    {
      path: '/view2',
      component: View2
    }
  ]
})
