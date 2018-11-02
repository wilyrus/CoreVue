<template>
    <div class="navigation-container" v-if="show">
        <v-btn :disabled=!showBackButton v-on:click="navigateBack" flat icon color="white">
            <v-icon v-show="showBackButton" medium color="black">keyboard_arrow_left</v-icon>
        </v-btn>
        <span class="navigation-title">{{navigationTitle}}</span>
        <v-btn flat icon color="white">
            <v-icon medium color="black">search</v-icon>
        </v-btn>
    </div>
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
            show: false,
            showBackButton: false,
            navigationTitle: ''
        };
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

<style>
.navigation-container {
    top: 0;
    z-index: 10;
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.navigation-title {
    font-size: 1.5em;
}
</style>