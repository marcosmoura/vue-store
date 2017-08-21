import isPromise from 'is-promise'

const actions = (vm, store) => {
  const vmActions = vm.$options.actions
  const modules = Object.keys(vmActions)

  if (modules.length) {
    modules.forEach(module => {
      const actions = store[module].actions
      const state = store[module].state
      const names = Object.keys(actions)

      names.forEach(name => {
        vm[name] = () => {
          const action = actions[name].bind(null, state)()

          if (isPromise(action)) {
            return action
          }

          return Promise.resolve()
        }
      })
    })
  }
}

export default actions
