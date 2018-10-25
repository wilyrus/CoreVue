<template>
<div class="dashboard">
  <div class="dashboard-title">{{ title }}</div>
  <div class="dashboard-cards">
    <div v-for="item in cards" :key="item.name">
      <card-item v-bind:card="item"></card-item>
    </div>
  </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardItem from './CardItem.vue';
import CardsState from './CardStore';

export default Vue.extend({
  computed: {
    cards(): any {
      return this.$store.state.CardStore.cards;
    },
    title(): string {
      return this.$store.state.CardStore.title
    }
  },
  components: {
    CardItem
  }
});
</script>

<style>
.dashboard {
  display: flex;
  margin: 15px;
  flex-direction: column;
}
.dashboard-title {
  font-size: 4em;
}
.dashboard-cards {
  display: flex;
   flex-wrap: wrap;
}
</style>