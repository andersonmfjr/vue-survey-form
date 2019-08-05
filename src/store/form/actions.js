import { db } from '@/config/db';
import {
  SET_FORM_DATA, UPDATE_FORM_STATE, FETCH_START, FETCH_SUCCESS, FETCH_ERROR,
} from './types';

export default {
  async fetchForm({ commit }) {
    try {
      commit(FETCH_START);
      const ref = db.collection('questions');
      const response = await ref.orderBy('order', 'asc').get();
      const questions = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      commit(SET_FORM_DATA, questions);
      commit(UPDATE_FORM_STATE, { key: 'formLength', value: questions.length });
      commit(FETCH_SUCCESS);
      return true;
    } catch (error) {
      commit(FETCH_ERROR);
      return error;
    }
  },
};
