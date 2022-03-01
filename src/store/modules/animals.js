const state = {
  penguins: 0,
  wolfs: 0
}

const mutations = {
  ADD_PENGUIN (state) {
    state.penguins += 1
  },
  ADD_WOLF (state) {
    state.wolfs += 1
  }
}

const actions = {
  commitAddPenguin ({ commit }) {
    commit('ADD_PENGUIN')
  },
  commitAddWolf ({ commit }) {
    commit('ADD_WOLF')
  }
}

const getters = {
  getPenguins (state) {
    return state.penguins
  },
  getWolfs (state) {
    return state.wolfs
  }
}

export default { state, mutations, actions, getters }
