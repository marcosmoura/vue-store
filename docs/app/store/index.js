import Vue from 'vue'
import VueStore from 'vue-store'

Vue.use(VueStore, {
  default: {
    state: {
      title: 'Vue Store'
    },
    actions: {
      setTitle (title) {
        console.log(title)
      }
    }
  }
})
