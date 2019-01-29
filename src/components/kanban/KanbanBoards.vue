<template>
  <div>
    <v-list three-line>
      <v-list-tile
        @click="navigateToBoard(project)"
        v-for="project in projects"
        :key="project.name"
        avatar
      >
        <v-list-tile-avatar>
          <v-icon>{{project.icon}}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="project.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="project.description"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn
      color="blue"
      dark
      fab
      fixed
      bottom
      right
      @click="navigateToProductCreation"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        projects(): any {
            return this.$store.state.KanbanStore.projects;
        }
    },
    mounted() {
        this.$store.commit('updateNavigationTitle', 'Projects');
    },
    methods: {
        navigateToBoard(item: any): any {
            this.$router.push(`/kanbanBoards/${item.id}`);
        },
        navigateToProductCreation() {
            this.$router.push(`/kanbanBoards/new`);
        }
    }
});
</script>

<style>
</style>