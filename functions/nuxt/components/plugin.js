import Vue from 'vue'

const components = {
  ConfirmEmail: () => import('../../components/confirmEmail.vue' /* webpackChunkName: "components/confirm-email" */).then(c => c.default || c),
  NavifationTheHeader: () => import('../../components/Navifation/TheHeader.vue' /* webpackChunkName: "components/navifation-the-header" */).then(c => c.default || c),
  MainPageAsideContent: () => import('../../components/mainPage/asideContent.vue' /* webpackChunkName: "components/main-page-aside-content" */).then(c => c.default || c),
  MainContent: () => import('../../components/mainPage/mainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => c.default || c),
  MainSlider: () => import('../../components/mainPage/mainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
