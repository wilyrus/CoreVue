import Vue from 'vue';
import ApplicationRouter from './ApplicationRouter';
import ApplicationStore from './ApplicationStore';
import NavigationToolbar from './components/navigation/NavigationToolbar.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './assets/main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import ServiceWorkerService from './services/ServiceWorkerService';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

ServiceWorkerService.registerServiceWorker();

export default new Vue({
    data() {
        return {
            transitionName: 'slide-right'
        };
    },
    el: '#vue-app',
    template: `
  <v-app>
  <NavigationToolbar/>
  <v-content>
  <transition name="slide-fade">
  <router-view></router-view>
  </transition>
  </v-content>
</v-app>
  `,
    store: ApplicationStore,
    router: ApplicationRouter,
    components: {
        NavigationToolbar
    }
});
