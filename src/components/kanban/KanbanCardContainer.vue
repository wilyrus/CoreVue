<template>
  <draggable v-model="cards">
    <transition-group
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      tag="div"
      class="cardsContainer"
      name="company"
    >
      <span></span>
      <template v-for="item in cards">
        <card-item
          :key="item.name"
          v-bind:card="item"
        ></card-item>
      </template>
    </transition-group>
  </draggable>
</template>

<script lang="ts">
import Vue from 'vue';
import draggable from 'vuedraggable';
import CardItem from './KanbanCard.vue';
import CardsState from './KanbanStore';
import { TweenLite } from 'gsap';

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
    }),
    computed: {
        cards: {
            get(): any {
                return this.$store.state.CardStore.cards;
            },
            set(value: any) {
                this.$store.commit('updateList', value);
            }
        },
        title(): string {
            return this.$store.state.CardStore.title;
        }
    },
    components: {
        CardItem,
        draggable
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
.cardsContainer {
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 15px;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>