import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '@/views/Jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/jobs/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/jobs/:id',
    name: 'jobdetails',
    component: JobDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
