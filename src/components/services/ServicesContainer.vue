<template>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    cards(): any {
      return this.$store.state.ServicesStore.cards;
    }
  }
});
</script>

<style>
</style>