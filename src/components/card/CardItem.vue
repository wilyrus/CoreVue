<template>
    <div class="card-container">
      <v-badge
        overlap
        color="orange"
      >
      <v-icon
          slot="badge"
          dark
          small
        >done</v-icon>
    </v-badge>
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
    .card-container {
        min-width: 15em;
        height: 15em;
    }
}
.card-title {
    padding: 5px;
}
.card-container {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 50%;
    min-width: 10em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
}
</style>