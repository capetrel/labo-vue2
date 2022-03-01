const state = {
  oranges: 0,
  apples: 0
}

const mutations = {
  ADD_ORANGE (state) {
    state.oranges += 1
  },
  ADD_APPLE (state) {
    state.apples += 1
  }
}

const actions = {
  commitAddOrange ({ commit }) {
    commit('ADD_ORANGE')
  },
  commitAddApple ({ commit }) {
    commit('ADD_APPLE')
  }
}

const getters = {
  getOranges (state) {
    return state.oranges
  },
  getApples (state) {
    return state.apples
  }
}

export default { state, mutations, actions, getters }
