<template>
    <div class="card-container" v-on:click="navigateToUrl">
        <v-badge overlap color="red">
            <span slot="badge">6</span>
        </v-badge>
        <span class="card-title">{{card.name}}</span>
        <span class="card-text">{{card.text}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['card'],
    methods: {
        navigateToUrl() {
            if (this.card.url) {
                this.$router.push(this.card.url);
            }
        }
    }
});
</script>

<style>
@media (min-width: 1000px) {
    .card-container {
        min-width: 15em;
        height: 15em;
    }
}
.card-title {
    padding: 5px;
}
.card-container {
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 10.5em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
    position: relative;
}
.card-text {
    padding: 10px;
}
</style>