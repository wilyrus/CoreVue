<template>
    <v-timeline>
          <transition-group appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"    
     tag="div" name="pointTransition">
      <v-timeline-item
      class="pointTransition"
        v-for="point in points"
        :key="point.title"
        color="red lighten-2"
        large
      >
        <span slot="opposite">{{point.subtitle}}</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{point.title}}</v-card-title>
          <v-card-text>
            {{point.description}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
      </transition-group>
    </v-timeline>
</template>

<script lang="ts">
import Vue from 'vue';
import { TweenLite } from 'gsap';

let inc = 0;

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
    }),
    computed: {
        points(): any {
            return this.$store.state.TimelineStore.timelines;
        }
    },
    methods: {
        beforeEnter(el: HTMLElement) {
            el.style.opacity = '0';
        },
        enter(el: HTMLElement, done: Function) {
            const delay = this.presentationDelay++ * 50;

            el.style.top = `${-el.offsetTop}px`;

            setTimeout(() => {
                TweenLite.to(el, 0.3, {
                    opacity: 1,
                    top: 0,
                    onComplete: done
                });
            }, delay);
        }
    }
});
</script>

<style>
.pointTransition {
    position: relative;
}
</style>