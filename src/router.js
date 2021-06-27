import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import General from './layouts/general.vue'
import loggedOut from './layouts/loggedOut.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },

    {
      path: '/loggedOut',
      component: loggedOut,
      children: [
        {
          path: '/login',
          component: Login,
        },
        {
          path: '/register',
          component: Register,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  const home = '/home'
  const root = '/'

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login')
  }

  if (to.path == home && !loggedIn) {
    next('/')
  } else {
    next()
  }
})
