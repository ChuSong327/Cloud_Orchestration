import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Auth/Login'
import ForgotPassword from '@/views/Auth/ForgotPassword'
import ResetPassword from '@/views/Auth/ResetPassword'
import Register from '@/views/Auth/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/schedules',
      name: 'Schedules',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Schedules')
    },
    {
      path: '/monitor',
      name: 'Monitor',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Monitor')
    },
    {
      path: '/compose/:scheduleName',
      name: 'Compose',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Compose')
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/Calendar')
    },
    {
      path: '/marketplace',
      name: 'Marketplace',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/Marketplace')
    },
    {
      path: '/billing',
      name: 'Billing',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/Billing')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Account')
    },
    {
      path: '/configure/:appName',
      name: 'Configure',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Config'),
      meta: {
        auth: false,
        title: 'Configure'
      }
    },
    {
      path: '*',
      name: 'PathNotFound',
      component: () =>import(/* webpackChunkName: "about" */ '@/views/Generic/404')
    }
  ]
})
