import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import LayoutAccount from './layouts/LayoutAccount.vue';
import {
  AboutPage,
  HomePage,
  LoginPage,
  NewAccount,
  NotFound,
  HomeTienda,
  HomeTapiceria
} from './pages/index.js'

const routes = [
  {
    path: '/telasemanuel',
    component: HomePage,
    meta: {
      title: 'Elige dónde vas a comprar',
      layout: LayoutAccount
    }
  },
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Elige dónde vas a comprar',
      layout: LayoutAccount
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'Sobre nosotros',
      layout: DefaultLayout
    }
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: 'Inicia sesión en tu cuenta',
      layout: LayoutAccount
    }
  },
  {
    path: '/register',
    component: NewAccount,
    meta: {
      title: 'Crea tu cuenta nueva',
      layout: LayoutAccount
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      title: 'Página no encontrada',
      layout: DefaultLayout
    }
  },
  {
    path: '/store',
    component: HomeTienda,
    meta: {
      title: 'Tienda',
      layout: DefaultLayout
    }
  },
  {
    path: '/upholstery',
    component: HomeTapiceria,
    meta: {
      title: 'Tapiceria',
      layout: DefaultLayout
    }
  },
];

const router = createRouter({
  /*history: createWebHistory(import.meta.env.BASE_URL)*/
  history: createWebHistory('#'),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Tienda'
})

export default router
