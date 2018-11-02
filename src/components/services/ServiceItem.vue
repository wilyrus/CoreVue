<template>
    <div class="service-container">
        <span class="card-title">{{card.name}}</span>
        <span>{{card.description}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['card']
});
</script>

<style>
@media (min-width: 1000px) {
    .service-container {
        flex: 1;
    }
}
.card-title {
    padding: 5px;
}
.service-container {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 100%;
    min-width: 10em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
}
</style>