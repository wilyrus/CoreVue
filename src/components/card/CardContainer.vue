<template>
    <p>{{name}}</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      name: 'My name'
    };
  }
});
</script>

<style>
p {
  font-size: 2em;
  background-color: rebeccapurple;
}
</style>