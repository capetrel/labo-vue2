import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import fruits from './modules/fruits'
import animals from './modules/animals'
import createMultiTabState from 'vuex-multi-tab-state'
// import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    counter: 0,
    dictionary: {}
  },
  mutations: {
    increment (state) {
      state.counter += 1
    },
    addKeyValue (state, { key, value }) {
      console.log(state)
      state.dictionary[key] = value
    },
    removeKey (state, key) {
      const { [key]: removedKey, ...rest } = state.dictionary
      state.dictionary = rest
    },
    nullify (state) {
      state.dictionary = null
    },
    newDictionary (state) {
      state.dictionary = {}
    }
  },
  modules: {
    todos,
    fruits,
    animals
  },
  plugins: [
    createMultiTabState({
      statesPaths: ['fruits.oranges', 'animals.penguins', 'counter', 'dictionary']
    })
  ],
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
