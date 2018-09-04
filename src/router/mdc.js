import Vue from 'vue'
import Router from 'vue-router'
import Mdc from '@/components/Mdc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mdc',
      name: 'mdc',
      component: Mdc
    }
  ]
})
