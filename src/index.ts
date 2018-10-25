import Vue from 'vue';
import VueRouter from 'vue-router';
import CardContainer from './components/card/CardContainer.vue';
import ServicesContainer from './components/services/ServicesContainer.vue';
import SocialContainer from './components/social/SocialContainer.vue';
import ApplicationStore from './ApplicationStore';

Vue.use(VueRouter);

export default new Vue({
  el: '#vue-app',
  template: `<div>
  <CardContainer/>
  <ServicesContainer/>
  <SocialContainer/>
  </div>
  `,
  store: ApplicationStore,
  computed: {
    computedString(): string {
      return '';
    }
  },
  components: {
    CardContainer,
    ServicesContainer,
    SocialContainer
  }
});
