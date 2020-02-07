import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/custom.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
