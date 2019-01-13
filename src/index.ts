import Vue from 'vue';
import ApplicationRouter from './ApplicationRouter';
import ApplicationStore from './ApplicationStore';
import NavigationToolbar from './components/navigation/NavigationToolbar.vue';
import BottomNavigation from './components/bottomNavigation/BottomNavigation.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './assets/main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

export default new Vue({
    data() {
        return {
            transitionName: 'slide-right'
        };
    },
    el: '#vue-app',
    template: `
  <v-app class="body-container">
  <NavigationToolbar/>
  <transition name="slide-fade">
  <router-view class="content-container"></router-view>
  </transition>
  <BottomNavigation/>
</v-app>
  `,
    store: ApplicationStore,
    router: ApplicationRouter,
    components: {
        NavigationToolbar,
        BottomNavigation
    }
});
