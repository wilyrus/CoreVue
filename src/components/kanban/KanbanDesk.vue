<template>
    <div class="timeline_container">
        <v-timeline align-top dense>
            <transition-group appear v-on:before-enter="beforeEnter" v-on:enter="enter" tag="div" name="pointTransition">
                <v-timeline-item fill-dot class="pointTransition" v-for="point in points" :key="point.title" :icon="point.type" color="purple">
                    <v-card class="elevation-2">
                        <v-card-title class="purple lighten-2">
                            <span class="point-title white--text font-weight-light">{{point.title}}</span>
                        </v-card-title>
                        <v-card-text>
                            {{point.description}}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </transition-group>
        </v-timeline>
    </div>
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
.point-title {
    font-size: 1.5em;
}
.timeline_container {
    padding: 0 10px;
}
</style>