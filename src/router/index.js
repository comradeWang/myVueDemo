import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/components/TestPage'
import axiosTest from '@/components/axiosTest'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/axios',
      name: 'axiosTest',
      component: axiosTest
    },
  ]
})
