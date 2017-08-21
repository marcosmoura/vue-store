import makeReactive from './makeReactive'

const state = (vm, store) => {
  const vmState = vm.$options.state
  const modules = Object.keys(vmState)

  if (modules.length) {
    modules.forEach(module => {
      const state = store[module].state
      const names = Object.keys(state)

      names.forEach(name => {
        vm.$options.computed[name] = {
          get () {
            return makeReactive(state[name])
          },
          set (value) {
            state[name] = value
          }
        }
      })
    })
  }
}

export default state
