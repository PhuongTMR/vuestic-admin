import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'statistics',
        path: 'statistics',
        component: RouteViewComponent,
        children: [
          {
            name: 'charts',
            path: 'charts',
            component: () => import('../pages/admin/statistics/charts/Charts.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
            },
          },
          {
            name: 'progress-bars',
            path: 'progress-bars',
            component: () => import('../pages/admin/statistics/progress-bars/ProgressBars.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
            },
          },
        ],
      },
      {
        name: 'forms',
        path: 'forms',
        component: RouteViewComponent,
        children: [
          {
            name: 'form-elements',
            path: 'form-elements',
            component: () => import('../pages/admin/forms/form-elements/FormElements.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
            },
          },
          {
            name: 'medium-editor',
            path: 'medium-editor',
            component: () => import('../pages/admin/forms/medium-editor/MediumEditor.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
            },
          },
        ],
      },
      {
        name: 'maps',
        path: 'maps',
        component: RouteViewComponent,
        children: [
          {
            name: 'maplibre-maps',
            path: 'maplibre-maps',
            component: () => import('../pages/admin/maps/maplibre-maps/MapLibreMapsPage.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
            },
          },
          {
            name: 'yandex-maps',
            path: 'yandex-maps',
            component: () => import('../pages/admin/maps/yandex-maps/YandexMapsPage.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
            },
          },
          {
            name: 'leaflet-maps',
            path: 'leaflet-maps',
            component: () => import('../pages/admin/maps/leaflet-maps/LeafletMapsPage.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
            },
          },
          {
            name: 'bubble-maps',
            path: 'bubble-maps',
            component: () => import('../pages/admin/maps/bubble-maps/BubbleMapsPage.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
            },
          },
          {
            name: 'line-maps',
            path: 'line-maps',
            component: () => import('../pages/admin/maps/line-maps/LineMapsPage.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
            },
          },
        ],
      },
      {
        name: 'tables',
        path: 'tables',
        component: RouteViewComponent,
        children: [
          {
            name: 'markup',
            path: 'markup',
            component: () => import('../pages/admin/tables/markup-tables/MarkupTables.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
            },
          },
          {
            name: 'data',
            path: 'data',
            component: () => import('../pages/admin/tables/data-tables/DataTables.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
            },
          },
        ],
      },
      {
        name: 'pages',
        path: 'pages',
        component: RouteViewComponent,
        children: [
          {
            name: 'faq',
            path: 'faq',
            component: () => import('../pages/admin/pages/faq/FaqPage.vue'),
          },
          {
            name: 'payments',
            path: 'payments',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'users',
            path: 'users',
            component: () => import('../pages/users/UsersPage.vue'),
          },
          {
            name: 'projects',
            path: 'projects',
            component: () => import('../pages/projects/ProjectsPage.vue'),
          },
          {
            name: 'billing',
            path: 'billing',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'preferences',
            path: 'preferences',
            component: () => import('../pages/preferences/Preferences.vue'),
          },
          {
            name: 'pricing-plans',
            path: 'pricing-plans',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
          {
            name: 'settings',
            path: 'settings',
            component: () => import('../pages/settings/Settings.vue'),
          },
        ],
      },
      UIRoute,
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      document.querySelector('.app-layout__page')?.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
