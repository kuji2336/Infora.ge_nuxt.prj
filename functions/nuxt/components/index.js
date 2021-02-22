export { default as ConfirmEmail } from '../../components/confirmEmail.vue'
export { default as NavifationTheHeader } from '../../components/Navifation/TheHeader.vue'
export { default as MainPageAsideContent } from '../../components/mainPage/asideContent.vue'
export { default as MainContent } from '../../components/mainPage/mainContent.vue'
export { default as MainSlider } from '../../components/mainPage/mainSlider.vue'

export const LazyConfirmEmail = import('../../components/confirmEmail.vue' /* webpackChunkName: "components/confirm-email" */).then(c => c.default || c)
export const LazyNavifationTheHeader = import('../../components/Navifation/TheHeader.vue' /* webpackChunkName: "components/navifation-the-header" */).then(c => c.default || c)
export const LazyMainPageAsideContent = import('../../components/mainPage/asideContent.vue' /* webpackChunkName: "components/main-page-aside-content" */).then(c => c.default || c)
export const LazyMainContent = import('../../components/mainPage/mainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => c.default || c)
export const LazyMainSlider = import('../../components/mainPage/mainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => c.default || c)
