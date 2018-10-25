import Vue from 'vue';
import Vuex from 'vuex';
import CardStore from './components/card/CardStore';
import ServicesStore from './components/services/ServicesStore';
import SocialStore from './components/social/SocialStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CardStore,
        ServicesStore,
        SocialStore
    }
  })

export default store;