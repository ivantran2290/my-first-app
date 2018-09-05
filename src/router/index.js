import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import GoogleKeep from '@/components/GoogleKeep'
import GoogleContacts from '@/components/googleContacts'
import googleYoutube from '@/components/googleYoutube'
import baseline from '@/components/baseline'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baseline',
      component: baseline
    },
    {
      path: '/keep',
      name: 'GoogleKeep',
      component: GoogleKeep
    },
    {
      path: '/contact',
      name: 'GoogleContacts',
      component: GoogleContacts
    },
    {
      path: '/youtube',
      name: 'googleYoutube',
      component: googleYoutube
    }
  ]
})
