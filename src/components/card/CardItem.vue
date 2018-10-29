<template>
    <div class="card-container">
      <v-badge
        overlap
        color="red"
      >
      <span slot="badge">6</span>
    </v-badge>
    <span class="card-title">{{card.name}}</span>
    <span class="card-text">{{card.text}}</span>
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
    width: 10.5em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
}
.card-text {
  padding: 10px
}
</style>