<template>
  <transition-group
    appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    tag="div"
    class="board_container"
  >
    <span key="title">{{projectName}}</span>
    <template v-for="column in columns">
      <kanban-card-container :key="column.id" :column="column" class="kanban-card-container"></kanban-card-container>
    </template>
  </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import KanbanCardContainer from './KanbanCardContainer.vue';
import { KanbanProject } from './KanbanStore';
import { TweenLite } from 'gsap';

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
    }),
    computed: {
        project(): any {
            return this.$store.state.KanbanStore.projects.find((project: KanbanProject) => project.id === parseInt(this.$route.params.id));
        },
        projectName(): void {
            this.$store.commit('updateNavigationTitle', this.project.name);
        },
        columns(): any {
            return this.project.columns;
        }
    },
    components: {
        KanbanCardContainer
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
.board_container {
    display: flex;
    flex-direction: row;
    padding: 15px;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.2);
}
.kanban-card-container {
    position: relative;
}
</style>