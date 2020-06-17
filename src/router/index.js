import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Saved from '@/views/Saved'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Saved',
    name: 'Saved',
    component: Saved,
    // props: true
  }

]

const router = new VueRouter({
  routes
})

export default router
