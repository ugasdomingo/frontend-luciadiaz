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
                path: 'autoregistro',
                component: () => import('pages/test/AutoregistroPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'seis-razones',
                component: () => import('pages/test/SixReasonsTestPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'arquetipos',
                component: () => import('pages/test/ArchetypeTestPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'temperamento',
                component: () => import('pages/test/TemperTestPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'pensamientos',
                component: () => import('pages/test/ThoughtsTestPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'escritorio',
                component: () => import('pages/private/DeskPage.vue'),
                meta: {
                    auth: true,
                },
            },
            {
                path: 'login',
                component: () => import('pages/auth/LoginPage.vue'),
            },
            {
                path: 'signup',
                component: () => import('pages/auth/RegistroPage.vue'),
            },
            {
                path: 'citas',
                component: () => import('src/pages/CitasPage.vue'),
            },
            {
                path: 'crianza-asertiva',
                component: () =>
                    import('src/pages/courses/CrianzaAsertivaPage.vue'),
            },
            {
                path: 'gracias',
                component: () => import('src/pages/GraciasPage.vue'),
            },
            {
                path: 'pruebas',
                component: () => import('src/pages/PruebasPage.vue'),
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
