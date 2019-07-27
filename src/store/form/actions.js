export default {
  async fetchForm({ commit }) {
    // Call firebase data
    commit('setFormData');
  },
};
