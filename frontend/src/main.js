// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import { SSL_OP_COOKIE_EXCHANGE } from 'constants'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/**
 * CSS IMPORTS
 */
import '@/assets/css/custom-css-bootstrap-magic.css'
import '@/assets/scss/styles.scss'

/**
 * JS IMPORTS
 */
import '../node_modules/bootstrap.native/dist/bootstrap-native-v4'
import '../node_modules/bootstrap.native/dist/polyfill'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

/**
 * PROGRESS BAR
 */
import VueProgressBar from 'vue-progressbar'
const options = {
  color: '#23f0ff',
  failedColor: '#ff3030',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

/**
 * LAZY-LOAD IMG
 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: '/static/img/image_not_found.jpg',
  loading: '/static/img/loading_icon_compressed.gif',
  attempt: 1
})

/**
 * LOADING COMPONENT
 */
Vue.component('loading', {
  template: `
  <div class="container-fluid d-flex justify-content-center">
    <img src="/static/img/Interwind-2s-200px-transparent.svg">
  </div>
  `
})

/**
 * FONT-AWESOME-VUE
 */
import fontawesome from '@fortawesome/fontawesome'
import {
  faAngleDown,
  faDoorOpen,
  faInfoCircle,
  faPlusCircle,
  faPortrait,
  faPenSquare,
  faTrash,
  faTags,
  faStar,
  faCubes,
  faClock,
  faHome, 
  faCopyright,
  faUnlockAlt,
  faEnvelope,
  faAt,
  faUserAstronaut,
  faUserNinja} from '@fortawesome/fontawesome-free-solid'
 
fontawesome.library.add(
  faAngleDown,
  faDoorOpen,
  faInfoCircle,
  faPlusCircle,
  faPortrait,
  faPenSquare,
  faTrash,
  faTags,
  faStar,
  faCubes,
  faClock,
  faHome,
  faCopyright,
  faUnlockAlt,
  faEnvelope,
  faAt,
  faUserAstronaut,
  faUserNinja
)

/**
 * CONFIG
 */
// Vue.config.productionTip = false
// Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')