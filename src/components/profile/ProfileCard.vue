<template>
<div>
    <div class="card-container profile-card" v-on:click='navigatieToProfilePage'>
        <v-avatar
            :tile="tile"
            :size="80"
            color="grey lighten-4"
          >
            <img src="../../resources/avatar.jpg" alt="avatar">
          </v-avatar>
          <div>
      <span class="card-title">{{profileCard.name}}</span>
      <span>{{profileCard.description}}</span>
          </div>
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
.profile-card {
  flex: 1;
  width: auto;
      padding: 10px;
          flex-direction: row;
}
</style>