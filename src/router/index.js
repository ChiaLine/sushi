import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: () => import('../views/Menu1.vue')
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: () => import('../views/Menu2.vue')
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: () => import('../views/Menu3.vue')
    }
  ]
})

export default router
