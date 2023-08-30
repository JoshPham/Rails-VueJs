// store/auth.js
import axios from 'axios';

const state = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
};

const actions = {
  async logout({ commit }) {
    try {
      await axios.delete('/api/users/sign_out');
      commit('clearUser');
      console.log('Logged out');
    } catch (error) {
      console.error(error.response.data); // Handle error
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
