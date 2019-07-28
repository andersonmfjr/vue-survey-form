import { SET_FORM_DATA, UPDATE_FORM_STATE, UPDATE_FORM_DATA } from './types';

export default {
  [SET_FORM_DATA](state, payload) {
    state.formData = payload;
  },
  [UPDATE_FORM_STATE](state, payload) {
    state.formState[payload.key] = payload.value;
  },
  [UPDATE_FORM_DATA](state, payload) {
    state.formData[payload.key] = payload.value;
  },
};
