import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Adjective from '@/views/Adjective'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adjective',
    name: 'adjective',
    component: Adjective
  }

]

const router = new VueRouter({
  routes
})

export default router
