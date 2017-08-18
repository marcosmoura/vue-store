const makeReactive = (Vue, store) => {
  const Store = {}

  Vue.util.defineReactive(Store, 'reactive', store)

  return Store.reactive
}

const plugin = (Vue, store = {}) => {
  const newStore = makeReactive(Vue, store)

  Vue.options.state = {}
  Vue.options.actions = {}
  Vue.options.computed = {}
  Vue.mixin({
    beforeCreate () {
      const state = this.$options.state
      const modules = Object.keys(state)

      if (modules.length) {
        modules.forEach(module => {
          const state = newStore[module].state
          const names = Object.keys(state)

          names.forEach(name => {
            this.$options.computed[name] = {
              get () {
                return makeReactive(Vue, state[name])
              },
              set (value) {
                state[name] = value
              }
            }
          })
        })
      }
    }
  })
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
