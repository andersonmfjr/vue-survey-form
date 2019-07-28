import { db } from '@/config/db';
import { SET_FORM_DATA, UPDATE_FORM_STATE } from './types';

export default {
  async fetchForm({ commit }) {
    try {
      const ref = db.collection('questions');
      const response = await ref.orderBy('order', 'asc').get();
      const questions = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      commit(SET_FORM_DATA, questions);
      commit(UPDATE_FORM_STATE, { key: 'formLength', value: questions.length });
      return true;
    } catch (error) {
      return error;
    }
  },
};
