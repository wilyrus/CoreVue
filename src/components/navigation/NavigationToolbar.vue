<template>
  <nav>
    <v-toolbar dark color="blue" app>
      <v-toolbar-side-icon dark @click="toggleDrawer" color="white"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{navigationTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
  </nav>
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
    timeline: 'График',
    dashboard: 'Дашборд',
    chat: 'Сообщения'
};

export default Vue.extend({
    data() {
        return {
            show: false,
            showBackButton: false,
            drawer: false
        };
    },
    computed: {
        navigationTitle(): string {
            return this.$store.state.navigationTitle;
        }
    },
    methods: {
        navigateBack() {
            this.$router.go(-1);
        },
        updateNavigation() {
            if (this.$route.name === 'login' || this.$route.name === 'default' || this.$route.name === 'home') {
                this.show = false;
            } else {
                this.show = true;
            }
            this.showBackButton = true;
            this.navigationTitle = routingTitles[this.$route.name || ''] || '';
        },
        toggleDrawer() {
            this.drawer = !this.drawer;
        }
    },
    created() {
        this.updateNavigation();
    },
    watch: {
        $route(to, from) {
            this.updateNavigation();
        }
    }
});
</script>
