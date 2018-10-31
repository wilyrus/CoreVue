<template>
    <div class="card-container" v-on:click="navigateToUrl">
        <div class="icon-content">
            <v-icon class="card-container__icon" x-large color="#0071b9">{{card.icon}}</v-icon>
            <v-badge overlap color="red">
                <span slot="badge">6</span>
            </v-badge>
        </div>
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
.content-container{
    padding-bottom: 76px;
}
.card-title {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
}
.card-container {
    display: flex;
    flex-direction: column;
    margin: 7px;
    padding: 15px 10px 10px;
    width: calc(50% - 14px);
    border-radius: 10px;
    background-color: #efeff4;
    position: relative;
    align-items: center;
    justify-content: center;
}

.icon-content{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-content .v-badge{
    position: absolute;
}
.icon-content .v-badge__badge{
    left: auto;
    top: auto;
    margin: -12px -25px 0 0;
}

.card-container .card-container__icon{
    color: #0071b9;
}

.card-text {
    padding: 10px;
}
.card-text:empty{
    display: none
}
</style>