import { db } from '@/config/db';

export default {
  async fetchForm({ commit }) {
    try {
      const ref = db.collection('questions');
      const response = await ref.orderBy('order', 'asc').get();
      const questions = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      commit('setFormData', questions);
      return true;
    } catch (error) {
      return error;
    }
  },
};
