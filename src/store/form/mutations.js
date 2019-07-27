export default {
  setFormData(state, payload) {
    state.formData = payload;
  },
  updateField(state, payload) {
    state.formData[payload.key] = payload.value;
  },
};
