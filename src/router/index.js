import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import twoColumnTemplateVue from '@/components/templates/twoColumnTemplate.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  },
  {
    path: '/projects/:projectTitle',
    name: 'project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
