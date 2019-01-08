<template>
  <div class="card-container profile-card" v-on:click="navigatieToProfilePage">
    <v-avatar :size="80" color="grey lighten-4">
      <img src="../../assets/avatar.jpg" alt="avatar">
    </v-avatar>
    <div class="profile-card__data">
      <span class="profile-card__last-name">{{profileCard.subname}}</span>
      <span class="profile-card__first-name">{{profileCard.name}}</span>
      <span class="profile-card__description">{{profileCard.description}}</span>
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
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex: 1;
    width: 100%;
    margin: 0;
    padding: 10px 15px;
    border-radius: 0;
}

.profile-card__data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 15px;
}
.profile-card__first-name {
    display: inline-block;
    font-weight: bold;
    font-size: 14px;
}
.profile-card__description {
    display: inline-block;
    font-size: 12px;
    color: #a0a0a1;
}
</style>