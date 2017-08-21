import createStore from './createStore'
import state from './state'
import actions from './actions'

const plugin = (Vue, schema = {}) => {
  const store = createStore(Vue, schema)

  Vue.mixin({
    beforeCreate () {
      const vm = this

      state(vm, store)
      actions(vm, store)
    }
  })
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
