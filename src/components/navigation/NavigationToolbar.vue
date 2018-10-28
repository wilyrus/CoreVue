<template>
<div class="navigation-container">
    <v-btn v-on:click="navigateBack" flat icon color="white"><v-icon large color="black">keyboard_arrow_left</v-icon></v-btn>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    navigateBack() {
      this.$router.go(-1);
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>