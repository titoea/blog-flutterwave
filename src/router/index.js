import { createWebHistory, createRouter } from 'vue-router';
import routes from "../router/routes"

const router = createRouter({
	history: createWebHistory(),
	routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
});

export default router