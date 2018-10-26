<template>
  <div class="dashboard-cards" v-on:click="navigateToTimeline">    
      <activity-item v-bind:card="card"></activity-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActivityItem from './ActivityItem.vue';
import { TweenLite } from 'gsap';

export default Vue.extend({
  computed: {
    card(): any {
      return this.$store.state.ActivityStore;
    }
  },
  components: {
    ActivityItem
  },
  methods: {
    navigateToTimeline() {
      this.$router.push('timeline')
    }
  }
});
</script>

<style>
.dashboard-title {
  font-size: 2.5em;
}
.content__list {
  display: flex;
   flex-wrap: wrap;
}

.company {
  position: relative;
}
</style>