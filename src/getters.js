const getters = (vm, store) => {
  const vmGetters = vm.$options.getters
  const modules = Object.keys(vmGetters)

  if (modules.length) {
    modules.forEach(module => {
      const getters = store[module].getters
      const state = store[module].state
      const names = Object.keys(getters)

      names.forEach(name => {
        vm.$options.computed[name] = () => {
          return getters[name].bind(null, state)()
        }
      })
    })
  }
}

export default getters
