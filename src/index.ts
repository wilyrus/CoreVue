import Vue from 'vue';
import VueRouter from 'vue-router';
import CardContainer from './components/card/CardContainer.vue';
import ApplicationStore from './ApplicationStore';

Vue.use(VueRouter);

export default new Vue({
  el: '#vue-app',
  template: '<CardContainer/>',
  store: ApplicationStore,
  computed: {
    computedString(): string {
      return '';
    }
  },
  components: {
    CardContainer
  }
});
