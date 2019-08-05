import {
  SET_FORM_DATA,
  UPDATE_FORM_STATE,
  UPDATE_FORM_DATA,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  RESET_FETCH_STATUS,
} from './types';

export default {
  [SET_FORM_DATA](state, payload) {
    state.formData = payload;
  },
  [UPDATE_FORM_STATE](state, payload) {
    state.formState[payload.key] = payload.value;
  },
  [UPDATE_FORM_DATA](state, payload) {
    state.responses[payload.key] = payload.value;
  },
  [FETCH_START](state) {
    state.fetching = true;
  },
  [FETCH_SUCCESS](state) {
    state.fetching = false;
    state.fetchSuccess = true;
  },
  [FETCH_ERROR](state) {
    state.fetching = false;
    state.fetchError = true;
  },
  [RESET_FETCH_STATUS](state) {
    state.fetching = false;
    state.fetchError = false;
    state.fetchSuccess = false;
  },
};
