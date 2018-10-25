import Vue from 'vue';
import CardContainer from './components/card/CardContainer.vue';

export default new Vue({
  el: '#vue-app',
  template: '<CardContainer/>',
  computed: {
    computedString(): string {
      return '';
    }
  },
  components: {
    CardContainer
  }
});
