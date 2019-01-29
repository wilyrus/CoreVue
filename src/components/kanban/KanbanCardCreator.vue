<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            md4
          >
            <v-text-field
              v-model="name"
              label="Name"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="description"
              label="Description"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu"
              :nudge-right="40"
              :return-value.sync="date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="date"
                label="Release date"
              ></v-text-field>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  color="primary"
                  @click="menu = false"
                >Cancel</v-btn>
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.menu.save(date)"
                >OK</v-btn>
              </v-date-picker>
            </v-menu>

            <v-flex xs12>
              <v-combobox
                v-model="select"
                :items="items"
                label="Assigne"
              ></v-combobox>
            </v-flex>

          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        dark
        color="blue"
        @click="close"
      >Close</v-btn>
      <v-btn
        dark
        color="blue"
        @click="addNewCard"
      >Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: undefined,
            description: undefined,
            date: undefined,
            menu: false
        };
    },
    created() {
        this.$store.commit('updateNavigationTitle', 'New card for ');
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