import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../components/practise-component/Signup.vue';
import Home from '../components/task/home.vue';
import AddTask from '../components/task/AddTask.vue';
import EditTask from '../components/task/EditTask.vue';
import TaskDetails from '../components/task/TaskDetails.vue';
import Create from '../components/task/Create.vue';
import Dashboard from '../components/task/Dashboard.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/add-task',
    name: 'addTask',
    component: AddTask
  },
  {
    path: '/edit-task/:id',
    name: 'editTask',
    component: EditTask
  },
  {
    path: '/task-details/:id',
    name: 'taskDetails',
    component: TaskDetails
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/dashboard',
    name: 'Dashborad',
    component: Dashboard
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
