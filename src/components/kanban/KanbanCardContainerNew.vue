
<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardsState from './KanbanStore';

export default Vue.extend({
    props: ['column', 'projectId'],
    methods: {
        addCard() {
            this.$router.push({ name: 'KanbanCardCreation', params: { projectId: this.projectId, columnId: this.column.id } });
        },
        onChange(changes: any) {
            Object.keys(changes).forEach(change =>
                this.$store.commit(`${change}Card`, {
                    columnId: this.column.id,
                    card: changes[change].element,
                    index: changes[change].newIndex,
                    projectId: this.projectId
                })
            );
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