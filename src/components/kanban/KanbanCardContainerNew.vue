
<template>
  <v-card
    class="column-adder"
    @click='addNewColumn'
  >
    <v-card-title>
      <span class="title font-weight-light">Add new column</span>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        small
        @click="addCard"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import CardsState from './KanbanStore';

export default Vue.extend({
    props: ['projectId'],
    methods: {
        addNewColumn() {
            this.$router.push({ name: 'KanbanColumnCreation', params: { projectId: this.projectId } });
        }
    }
});
</script>

<style>
.column-adder {
    height: 72px;
}
</style>