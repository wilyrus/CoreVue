import Vue from 'vue';
import ApplicationRouter from './ApplicationRouter';
import ApplicationStore from './ApplicationStore';
import NavigationToolbar from './components/navigation/NavigationToolbar.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './resources/main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

export default new Vue({
    el: '#vue-app',
    template: `
  <div class="body-container">
  <NavigationToolbar/>
  <div class="content-container">
  <router-view></router-view>
</div>
</div>
  `,
    store: ApplicationStore,
    router: ApplicationRouter,
    components: {
        NavigationToolbar
    }
});
