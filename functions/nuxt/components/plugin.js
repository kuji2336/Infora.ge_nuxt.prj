import Vue from 'vue'

const components = {
  Editor: () => import('../../components/Editor.vue' /* webpackChunkName: "components/editor" */).then(c => c.default || c),
  ConfirmEmail: () => import('../../components/confirmEmail.vue' /* webpackChunkName: "components/confirm-email" */).then(c => c.default || c),
  NavigationTheHeader: () => import('../../components/Navigation/TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => c.default || c),
  MainPageAsideContent: () => import('../../components/mainPage/asideContent.vue' /* webpackChunkName: "components/main-page-aside-content" */).then(c => c.default || c),
  MainContent: () => import('../../components/mainPage/mainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => c.default || c),
  MainSlider: () => import('../../components/mainPage/mainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => c.default || c),
  MainPageNewsSliderCont: () => import('../../components/mainPage/newsSliderCont.vue' /* webpackChunkName: "components/main-page-news-slider-cont" */).then(c => c.default || c),
  SlotsNewsContainer: () => import('../../components/slots/newsContainer.vue' /* webpackChunkName: "components/slots-news-container" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
