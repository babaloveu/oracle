import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import animate from 'animate.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(animate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
