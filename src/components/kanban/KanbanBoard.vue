<template>
  <transition-group
    appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    tag="div"
    class="board_wrp"
  >
    <draggable
      v-model="columns"
      key="someKey"
      @change="onChange"
      :options="{group:'columns'}"
      class="board_container"
    >
      <template v-for="column in columns">
        <kanban-card-container
          :projectId="project.id"
          :key="column.id"
          :column="column"
          class="kanban-card-container"
        ></kanban-card-container>
      </template>
    </draggable>
    <kanban-card-container-new
      :projectId="project.id"
      key="columnAdder"
    ></kanban-card-container-new>
  </transition-group>
</template>

<script lang="ts">
import Vue from 'vue';
import KanbanCardContainer from './KanbanCardContainer.vue';
import KanbanCardContainerNew from './KanbanCardContainerNew.vue';
import draggable from 'vuedraggable';

import { KanbanProject } from './KanbanStore';
import { TweenLite } from 'gsap';

export default Vue.extend({
    data: () => ({
        presentationDelay: 4
    }),
    computed: {
        project(): any {
            return this.$store.state.KanbanStore.projects.find((project: KanbanProject) => project.id === this.$route.params.projectId);
        },
        columns: {
            get(): any {
                return this.project.columns;
            },
            set() {}
        }
    },
    components: {
        KanbanCardContainer,
        KanbanCardContainerNew,
        draggable
    },
    methods: {
        beforeEnter(el: HTMLElement) {
            el.style.left = '50%';
            this.$store.commit('updateNavigationTitle', this.project.name);
        },
        enter(el: HTMLElement, done: Function) {
            const delay = this.presentationDelay++ * 50;
            setTimeout(() => {
                TweenLite.to(el, 0.25, {
                    left: 0,
                    onComplete: done
                });
            }, delay);
        },
        onChange() {}
    }
});
</script>

<style>
.board_wrp {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 15px;
}
.board_container {
    display: flex;
    flex-direction: row;
    height: 100%;
}
.kanban-card-container {
    position: relative;
    margin: 0 15px 15px 15px;
    max-height: 100%;
    display: flex !important;
    flex-direction: column;
}
</style>