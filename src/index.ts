import Vue from 'vue';
import ApplicationRouter from './ApplicationRouter';
import ApplicationStore from './ApplicationStore';
import NavigationToolbar from './components/navigation/NavigationToolbar.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './assets/main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '../dist/' })
        .then(function(reg) {
            // регистрация сработала
            console.log('Registration succeeded. Scope is ' + reg.scope);
        })
        .catch(function(error) {
            // регистрация прошла неудачно
            console.log('Registration failed with ' + error);
        });
}

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
