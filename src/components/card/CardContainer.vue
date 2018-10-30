<template>
<div class="dashboard">
  <div class="dashboard-cards">
    <transition-group appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"    
     tag="div" class="content__list" name="company">
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

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
    }),
    computed: {
        cards(): any {
            return this.$store.state.CardStore.cards;
        },
        title(): string {
            return this.$store.state.CardStore.title;
        }
    },
    components: {
        CardItem
    },
    methods: {
        beforeEnter(el: HTMLElement) {
            el.style.left = '50%';
        },
        enter(el: HTMLElement, done: Function) {
            const delay = this.presentationDelay++ * 50;
            setTimeout(() => {
                TweenLite.to(el, 0.25, {
                    left: 0,
                    onComplete: done
                });
            }, delay);
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
    font-size: 1.5em;
}
.content__list {
    display: flex;
    flex-wrap: wrap;
}

.company {
    position: relative;
}
</style>