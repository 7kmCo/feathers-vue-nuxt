const actions = {
  async login({ dispatch }, { valid, user }) {
    if (valid) {
      dispatch('auth/authenticate', {
        strategy: 'local',
        ...user,
      }, { root: true }).then(async () => {
        this.$router.push('/');
      }).catch((e) => {
        console.error('Authentication error', e);
      });
    }
  },
};

export default {
  namespaced: true,
  actions,
};