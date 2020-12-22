import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Evènements from "../views/Evènements.vue";
import Films from "../views/Films.vue";
import Village from "../views/Village.vue";

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: Evènements,
    meta: {
      title: "GMAC - Evènements",
    },
  },
  {
    path: "/:catchAll(.*)",
    component: Village,
    meta: {
      title: "GMAC - Village",
    },
  },
  {
    path: "/:catchAll(.*)",
    component: Films,
    meta: {
      title: "GMAC - Films",
    },
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router