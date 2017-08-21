import Vue from 'vue'
import VueStore from 'vue-store'

Vue.use(VueStore, {
  default: {
    state: {
      user: {
        name: 'Marcos Vinícius',
        role: 'Front End Engineer'
      }
    },
    actions: {
      logUserName ({ user }) {
        console.log(user.name)
      }
    }
  }
})
