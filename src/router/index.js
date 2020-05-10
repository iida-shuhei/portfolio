import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutSite from '../views/AboutSite.vue'
import AboutMe from '../views/AboutMe.vue'
import Contents from '../views/Contents.vue'
import Myself from '../views/Myself.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutSite',
    name: 'AboutSite',
    component: AboutSite
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents
  },
  {
    path: '/myself',
    name: 'Myself',
    component: Myself
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/notFound'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
