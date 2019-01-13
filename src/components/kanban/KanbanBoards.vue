<template>
  <div class="some-body">
    <v-list three-line>
      <v-list-tile
        @click="navigateToBoard(project)"
        v-for="project in projects"
        :key="project.name"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="project.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="project.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="project.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn color="blue" dark fab fixed bottom right>
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

    methods: {
        navigateToBoard(item: any): any {
            this.$router.push(`/kanbanBoards/${item.id}`);
        }
    }
});
</script>

<style>
</style>