import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('./pages/Error.vue')
  }
]

const debug = process.env.NODE_ENV !== 'production'

export default new VueRouter({
  mode: debug ? 'hash' : 'history',
  routes
})
