import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import GallerieGraphView from '../views/GallerieGraphView.vue'
import GallerieTattooView from '../views/GallerieTattooView.vue'
import ContactView from '../views/ContactView.vue'
import TermsView from '../views/TermsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/GallerieGraph',
      name: 'Gallerie Graph',
      component: GallerieGraphView
    },
    {
      path: '/GallerieTattoo',
      name: 'Gallerie Tattoo',
      component: GallerieTattooView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/Terms',
      name: 'Terms',
      component: TermsView
    },

    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ]
})

export default router
