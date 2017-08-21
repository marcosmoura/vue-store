/* Third Party */
import 'regenerator-runtime/runtime'
import Vue from 'vue'

/* App */
import App from './App'
import router from './routes'
import './store'
import './components'

Vue.config.productionTip = false

const app = new Vue({
  name: 'root',
  router,
  render: mount => mount(App)
})

router.onReady(() => {
  app.$mount('#docs')
})
