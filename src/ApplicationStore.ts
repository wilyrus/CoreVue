import Vue from 'vue';
import Vuex from 'vuex';
import CardStore from './components/card/CardStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CardStore
    }
  })

export default store;