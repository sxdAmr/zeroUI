import Vue from 'vue'
import App from './App.vue'

import '../components/css/zdemo.scss'
import '../components/css/zcard.scss'
import ZCard from '../components/lib/zcard/index'
import ZDemo from '../components/lib/zdemo/index'

Vue.use(ZCard);
Vue.use(ZDemo);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
