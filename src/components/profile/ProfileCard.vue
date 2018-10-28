<template>
<div>
    <div class="card-container" v-on:click='navigatieToProfilePage'>
      <span class="card-title">{{profileCard.name}}</span>
      <span>{{profileCard.description}}</span>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    profileCard(): any {
      return this.$store.state.ProfileStore;
    }
  },
  methods: {
    navigatieToProfilePage() {
      this.$router.push('/profile');
    }
  }
});
</script>

<style>
</style>