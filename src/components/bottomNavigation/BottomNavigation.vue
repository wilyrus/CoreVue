<template>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
        <v-btn color="teal" flat value="profile">
            <span>Профиль</span>
            <v-icon>account_circle</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="home">
            <span>Домой</span>
            <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="">
            <span>Search</span>
            <v-icon>search</v-icon>
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
            bottomNav: 'recent'
        };
    },
    watch: {
        bottomNav() {
            if (this.bottomNav) {
                this.$router.push(this.bottomNav);
            }
        },
        $route(to, from) {
            this.updateNavigationSelection(this.$route.name);
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
                default:
                    break;
            }
        }
    }
});
</script>

<style>
</style>