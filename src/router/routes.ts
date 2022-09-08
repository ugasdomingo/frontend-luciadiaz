import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'sobre-mi', component: () => import('pages/AboutPage.vue') },
      {
        path: 'psicologia',
        component: () => import('pages/PsicologiaPage.vue'),
      },
      {
        path: 'autoregistro',
        component: () => import('pages/AutoregistroPage.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'escritorio',
        component: () => import('pages/DeskPage.vue'),
        meta: {
          auth: true,
        },
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signup', component: () => import('pages/RegistroPage.vue') },
      {
        path: 'presencial',
        component: () => import('pages/PresencialPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
