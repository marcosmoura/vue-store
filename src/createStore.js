import makeReactive from './makeReactive'

const createStore = (Vue, store) => {
  Vue.options.state = {}
  Vue.options.getters = {}
  Vue.options.actions = {}
  Vue.options.computed = {}

  return makeReactive(store)
}

export default createStore
