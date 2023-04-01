import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            {
                path: 'sobre-mi',
                component: () => import('pages/AboutPage.vue'),
            },
            {
                path: 'psicologia',
                component: () => import('pages/PsicologiaPage.vue'),
            },
            {
                path: 'mi-escritorio',
                component: () => import('pages/private/DeskPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'citas',
                component: () => import('src/pages/CitasPage.vue'),
            },

            /* ********AUTH ROUTES******** */
            {
                path: 'login',
                component: () => import('pages/auth/LoginPage.vue'),
            },
            {
                path: 'signup',
                component: () => import('pages/auth/RegistroPage.vue'),
            },
            /* ********PSICOTEST ROUTES******** */

            /* ********BOOKS ROUTES******** */

            /* ********COURSES ROUTES******** */

            {
                path: 'gracias',
                component: () => import('pages/GraciasPage.vue'),
            },
            /* ********LEGAL ROUTES******** */
            {
                path: 'aviso-legal',
                component: () => import('pages/legal/AvisoLegalPage.vue'),
            },
            {
                path: 'politica-cookies',
                component: () => import('pages/legal/CookiesLegalPage.vue'),
            },
            {
                path: 'politica-privacidad',
                component: () =>
                    import('pages/legal/PoliticaPrivacidadPage.vue'),
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
