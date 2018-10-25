<template>
<div class="dashboard">
  <div class="dashboard-title">{{ title }}</div>
  <div class="dashboard-cards">
    <transition-group appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"    
     tag="ul" class="content__list" name="company">
    <div class="company" v-for="item in cards" :key="item.name">
      <card-item v-bind:card="item"></card-item>
    </div>
    </transition-group>
  </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardItem from './CardItem.vue';
import CardsState from './CardStore';
import { TweenLite } from 'gsap';

let inc = 0;

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
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.opacity = '0';
      el.style.left = '50%'
    },
    enter(el: HTMLElement, done: Function) {
      const delay = inc++ * 100
      setTimeout(() => {
        TweenLite.to(el, 0.3, {
          opacity: 1,
          left: 0,
          onComplete: done
        })
      }, delay)
    }
  }
});
</script>

<style>
.dashboard {
  display: flex;
  margin: 15px;
  flex-direction: column;
  overflow: hidden;
}
.dashboard-title {
  font-size: 4em;
}
.content__list {
  display: flex;
   flex-wrap: wrap;
}

.company {
  position: relative;
}
</style>