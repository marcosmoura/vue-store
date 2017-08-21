import Vue from 'vue'
import VueStore from 'vue-store'

Vue.use(VueStore, {
  default: {
    state: {
      user: {
        name: '',
        lastName: '',
        role: 'Front End Engineer'
      }
    },
    actions: {
      setFullName ({ user }) {
        return new Promise(resolve => {
          window.setTimeout(() => {
            user.name = 'Marcos'
            user.lastName = 'Moura'

            resolve()
          }, 400)
        })
      }
    },
    getters: {
      fullName ({ user }) {
        return `${user.name} ${user.lastName}`
      }
    }
  }
})
