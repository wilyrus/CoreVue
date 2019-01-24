<template>
  <v-card class="column-creator">
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="name" label="Name" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="description" label="Description" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" dark @click="dialog = false">Close</v-btn>
      <v-btn color="blue" dark @click="addNewColumn">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: undefined,
            description: undefined
        };
    },
    created() {
        this.$store.commit('updateNavigationTitle', 'Create new column');
    },
    methods: {
        addNewColumn(event: any) {
            this.$store.commit('addNewColumn', {
                name: this.name,
                description: this.description,
                projectId: this.$route.params.projectId
            });
            this.$router.push('/kanbanBoards');
        },
        close() {
            this.$router.push('/kanbanBoards');
        }
    }
});
</script>

<style>
.column-creator {
    margin: 15px;
}
</style>
