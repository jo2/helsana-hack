import VueRouter, { RouteConfig } from 'vue-router';
import store from 'src/store';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      { path: '/login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({path: '/login'});
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
