export default {
  state: () => ({}),
  actions: {
    fetchData(context) {
      context.commit('fetchingData')
    },
  },
  mutations: {
    fetchingData(state) {
      state.loading = true
    },
  },
  getters: {},
}
