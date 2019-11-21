const state = {
  isAlertShow: false
}

const mutations = {
  TOGGLE_ALERT: (state, isShow) => {
    state.isAlertShow = isShow
  }
}
const actions = {
  toggleAlert({ commit }, data) {
    commit('TOGGLE_ALERT', data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
