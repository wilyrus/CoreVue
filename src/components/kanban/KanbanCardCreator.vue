<template>
  <v-card>
    <v-card-title>
      <span class="headline">Создание карточки</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="name" label="Название" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="description" label="Описание" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn dark color="blue" @click="close">Close</v-btn>
      <v-btn dark color="blue" @click="addNewCard">Save</v-btn>
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
        this.$store.commit('updateNavigationTitle', 'Новая карточка для ');
    },
    methods: {
        addNewCard(event: any) {
            this.$store.commit('addNewCard', {
                name: this.name,
                description: this.description,
                projectId: this.$route.params.projectId,
                columnId: this.$route.params.columnId
            });
            this.$router.push(`/kanbanBoards/${this.$route.params.projectId}`);
        },
        close() {
            this.$router.push(`/kanbanBoards/${this.$route.params.projectId}`);
        }
    }
});
</script>