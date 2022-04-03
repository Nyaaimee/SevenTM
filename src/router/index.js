import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/practise-component/Signup.vue'

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
