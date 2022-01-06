import Vue from 'vue'
import VueRouter from 'vue-router'

import Sidebar from '../views/parts/Sidebar'
import PageHome from '../views/PageHome'
import PageA from '../views/PageA'
import PageB from '../views/PageB'
import PageC from '../views/PageC'
import PageTodo from '../views/PageTodo'
import PageUsers from '../views/PageUsers'
import PageUser from '../views/PageUser'
import Page404 from '../views/Page404'

Vue.use(VueRouter)

const routes = [
  { path: '/', components: { default: PageHome }, name: 'home' },
  { path: '/a', components: { default: PageA }, name: 'a', children: [{ path: 'b', component: PageB, name: 'a.b' }, { path: 'c', component: PageC, name: 'a.c' }] },
  { path: '/d', component: resolve => require(['../views/PageD.vue'], resolve), name: 'd' }, // async syste
  { path: '/todo', components: { default: PageTodo }, name: 'todo' },
  { path: '/users', components: { default: PageUsers, sidebar: Sidebar }, name: 'users' },
  { path: '/user/:id(\\d+)', components: { default: PageUser, sidebar: Sidebar }, name: 'user' },
  { path: '*', beforeEnter: (to, from, next) => { next('/404') } },
  { path: '/404', component: Page404 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
