<template>
<div class="dashboard">
  <div class="dashboard-title">{{ title }}</div>
  <div class="dashboard-cards">
    <transition-group appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"    
     tag="div" class="content__list" name="service-wrapper">
    <div class="service-wrapper" v-for="item in cards" :key="item.name">
      <service-item v-bind:card="item"></service-item>
    </div>
    </transition-group>
  </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ServiceItem from './ServiceItem.vue';
import { TweenLite } from 'gsap';

let inc = 0;

export default Vue.extend({
    data: () => ({
        presentationDelay: 0
    }),
    computed: {
        cards(): any {
            return this.$store.state.ServicesStore.services;
        },
        title(): string {
            return this.$store.state.ServicesStore.title;
        }
    },
    components: {
        ServiceItem
    },
    methods: {
        beforeEnter(el: HTMLElement) {
            el.style.opacity = '0';
            el.style.left = '50%';
        },
        enter(el: HTMLElement, done: Function) {
            const delay = this.presentationDelay++ * 50;

            setTimeout(() => {
                TweenLite.to(el, 0.25, {
                    opacity: 1,
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
.content__list {
    display: flex;
    flex-wrap: wrap;
}

.service-wrapper {
    position: relative;
    width: 100%;
}
</style>