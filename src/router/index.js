import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Users from '../views/Users.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  { path: '/home', redirect: '/' },
  {
    path: '/users/:id',
    props: true,
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) =>
  //
  // ...
  // explicitly return false to cancel the navigation
  true);

export default router;
