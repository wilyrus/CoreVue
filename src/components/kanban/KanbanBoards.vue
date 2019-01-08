<template>
  <div class="some-body">
    <v-list three-line>
      <v-list-tile v-on:click="navigateToBoard" v-for="item in boards" :key="item.title" avatar>
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn color="blue" dark fab fixed bottom right>
      <v-icon>plus</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        boards(): any {
            return this.$store.state.KanbanStore.boards;
        }
    },

    methods: {
        navigateToBoard(): any {
            console.log(123);
        }
    }
});
</script>

<style>
</style>