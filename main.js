import Vue from 'vue'
import App from './App'
// vuex
import store from './store'
// import ClUni from "cl-uni";
import { request } from './util/request.js'

Vue.prototype.$store=store
Vue.prototype.$request = request




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
