<template>
    <div class="card-container">
    <p>{{card.name}}</p>
    <p>{{card.description}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['card']
});
</script>

<style>
p {
  font-size: 2em;
}
@media (max-width: 1000px) { 
  .card-container {
  width: 20em;
  height: 20em;
}
 }
.card-container {
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-direction: column;
  margin: 15px;
  flex-basis: 50%;
  min-width: 25em;
  height: 25em;
  border-radius: 15px;
}
</style>