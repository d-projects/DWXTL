import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Form from '@/components/Form'
import Navigation from '@/components/Navigation'
import ViewSchool from '@/components/ViewSchool'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)
Vue.component('navigation', Navigation)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'CreateSchool',
      component: Form
    },
    {
      path: '/edit/:id',
      name: 'EditSchool',
      component: Form
    },
    {
      path: '/school/:id',
      name: 'ViewSchool',
      component: ViewSchool
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
