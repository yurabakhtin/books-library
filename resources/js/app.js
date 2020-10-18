/**
 * JavaScript for Front-Office
 */

require('./bootstrap')

import Vue from 'vue'
import { BootstrapVue, PaginationPlugin, SpinnerPlugin, IconsPlugin } from 'bootstrap-vue'
import App from './components/App'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(PaginationPlugin)
Vue.use(SpinnerPlugin)
Vue.use(IconsPlugin)

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
