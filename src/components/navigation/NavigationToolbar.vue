<template>
  <nav>
    <v-toolbar
      dark
      color="blue"
      app
    >
      <v-btn
        @click="toggleDrawer"
        icon
        flat
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{navigationTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <navigation-drawer :drawer="drawer" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationDrawer from './NavigationDrawer.vue';

type titles = {
    [key: string]: string;
};

const routingTitles: titles = {
    '': '',
    login: 'Авторизация',
    home: 'Домашний экран',
    profile: 'Профиль',
    timeline: 'График',
    dashboard: 'Дашборд',
    chat: 'Сообщения'
};

export default Vue.extend({
    data() {
        return {
            showBackButton: false,
            drawer: true
        };
    },
    components: {
        NavigationDrawer
    },
    computed: {
        navigationTitle(): string {
            return this.$store.state.navigationTitle;
        }
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        }
    }
});
</script>
