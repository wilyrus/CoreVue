<template>
    <transition-group appear v-on:before-enter="beforeEnter" v-on:enter="enter" tag="div" class="dashboard-cards content__list" name="service-wrapper">
        <template v-for="item in cards">
            <service-item :key="item.name" v-bind:card="item"></service-item>
        </template>
    </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import ServiceItem from './ServiceItem.vue';
import { TweenLite } from 'gsap';

let inc = 0;

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
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
.content__list {
    display: flex;
    flex-wrap: wrap;
}

.service-wrapper {
    position: relative;
    width: 100%;
}
</style>