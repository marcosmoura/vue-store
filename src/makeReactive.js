import Vue from 'vue'

const makeReactive = store => {
  const Store = {}

  Vue.util.defineReactive(Store, 'reactive', store)

  return Store.reactive
}

export default makeReactive
