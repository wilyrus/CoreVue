<template>
  <v-bottom-nav
    :active.sync="selectedNavigation"
    :value="true"
    color="white"
    fixed
  >
    <v-btn
      color="rgb(0, 113, 185)"
      flat
      value="profile"
    >
      <span>Профиль</span>
      <v-icon>account_circle</v-icon>
    </v-btn>

    <v-btn
      color="rgb(0, 113, 185)"
      flat
      value="home"
    >
      <span>Домой</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn
      color="rgb(0, 113, 185)"
      flat
      value
    >
      <span>Search</span>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn
      color="rgb(0, 113, 185)"
      flat
      value="kanbanBoards"
    >
      <span>Kanban</span>
      <v-icon>kanban</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script lang="ts">
import Vue from 'vue';

type titles = {
    [key: string]: string;
};

const routingTitles: titles = {
    '': '',
    login: 'Авторизация',
    home: 'Домашний экран',
    profile: 'Профиль',
    timeline: 'График'
};

export default Vue.extend({
    data() {
        return {
            bottomNav: 'recent',
            selectedNavigation: ''
        };
    },
    beforeMount() {
        this.updateNavigationSelection(this.$route.name);
    },
    watch: {
        selectedNavigation() {
            if (this.selectedNavigation) {
                this.updateNavigationSelection(this.selectedNavigation);
                this.$router.push({ name: this.bottomNav });
            }
        }
    },
    methods: {
        updateNavigationSelection(currentNavigationName?: string) {
            switch (currentNavigationName) {
                case 'home': {
                    this.bottomNav = 'home';
                    break;
                }
                case 'profile': {
                    this.bottomNav = 'profile';
                    break;
                }
                case 'kanbanBoards': {
                    this.bottomNav = 'KanbanBoards';
                    break;
                }
                default:
                    break;
            }
        }
    }
});
</script>

<style>
</style>