export { default as Editor } from '../../components/Editor.vue'
export { default as ConfirmEmail } from '../../components/confirmEmail.vue'
export { default as NavigationTheHeader } from '../../components/Navigation/TheHeader.vue'
export { default as MainPageAsideContent } from '../../components/mainPage/asideContent.vue'
export { default as MainContent } from '../../components/mainPage/mainContent.vue'
export { default as MainSlider } from '../../components/mainPage/mainSlider.vue'
export { default as MainPageNewsSliderCont } from '../../components/mainPage/newsSliderCont.vue'
export { default as SlotsNewsContainer } from '../../components/slots/newsContainer.vue'

export const LazyEditor = import('../../components/Editor.vue' /* webpackChunkName: "components/editor" */).then(c => c.default || c)
export const LazyConfirmEmail = import('../../components/confirmEmail.vue' /* webpackChunkName: "components/confirm-email" */).then(c => c.default || c)
export const LazyNavigationTheHeader = import('../../components/Navigation/TheHeader.vue' /* webpackChunkName: "components/navigation-the-header" */).then(c => c.default || c)
export const LazyMainPageAsideContent = import('../../components/mainPage/asideContent.vue' /* webpackChunkName: "components/main-page-aside-content" */).then(c => c.default || c)
export const LazyMainContent = import('../../components/mainPage/mainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => c.default || c)
export const LazyMainSlider = import('../../components/mainPage/mainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => c.default || c)
export const LazyMainPageNewsSliderCont = import('../../components/mainPage/newsSliderCont.vue' /* webpackChunkName: "components/main-page-news-slider-cont" */).then(c => c.default || c)
export const LazySlotsNewsContainer = import('../../components/slots/newsContainer.vue' /* webpackChunkName: "components/slots-news-container" */).then(c => c.default || c)
