import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b10321ec = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _bd3cfab8 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _740d128e = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _294f0e9e = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _7696090a = () => interopDefault(import('../pages/reset/index.vue' /* webpackChunkName: "pages/reset/index" */))
const _64f64bce = () => interopDefault(import('../pages/admin/posts/index.vue' /* webpackChunkName: "pages/admin/posts/index" */))
const _08bcb458 = () => interopDefault(import('../pages/admin/posts/politics/index.vue' /* webpackChunkName: "pages/admin/posts/politics/index" */))
const _21de3679 = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _65e145ca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _b10321ec,
    name: "admin"
  }, {
    path: "/login",
    component: _bd3cfab8,
    name: "login"
  }, {
    path: "/posts",
    component: _740d128e,
    name: "posts"
  }, {
    path: "/register",
    component: _294f0e9e,
    name: "register"
  }, {
    path: "/reset",
    component: _7696090a,
    name: "reset"
  }, {
    path: "/admin/posts",
    component: _64f64bce,
    name: "admin-posts"
  }, {
    path: "/admin/posts/politics",
    component: _08bcb458,
    name: "admin-posts-politics"
  }, {
    path: "/posts/:id",
    component: _21de3679,
    name: "posts-id"
  }, {
    path: "/",
    component: _65e145ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
