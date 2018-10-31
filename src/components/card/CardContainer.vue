<template>
    <transition-group appear v-on:before-enter="beforeEnter" v-on:enter="enter" tag="div" class="content__list" name="company">
        <template v-for="item in cards">
            <card-item :key="item.name" v-bind:card="item"></card-item>
        </template>
    </transition-group>
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
.dashboard-title {
    font-size: 1.5em;
}
.content__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
</style>