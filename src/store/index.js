import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'xueL7rjb0dGlD-GdJXx4GA==',
    config: {
      headers: {
        Authorization: `Bearer QHpj9vWob4AO4KizHubuwg==`
      }
    },
    YTSongShow: false,
    YTSongTitle: '',
    YTSongID: '',
    YTDayListTitle: '',
    YTDayListID: []
  },
  getters: {},
  mutations: {
    showYT(state, item) {
      state.YTSongShow = true;
      state.YTSongTitle = item.name;

      // this.getYTData();
    },
    getYTData() {}
  },
  actions: {},
  modules: {}
});
