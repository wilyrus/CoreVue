<template>
  <v-card>
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
      <v-btn dark color="blue" @click="close">Close</v-btn>
      <v-btn dark color="blue" @click="addNewProject">Save</v-btn>
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
        this.$store.commit('updateNavigationTitle', 'New project');
    },
    methods: {
        addNewProject(event: any) {
            this.$store.commit('addNewProject', {
                name: this.name,
                description: this.description
            });
            this.$router.push(`/kanbanBoards/`);
        },
        close() {
            this.$router.push('/kanbanBoards');
        }
    }
});
</script>