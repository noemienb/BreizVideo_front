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