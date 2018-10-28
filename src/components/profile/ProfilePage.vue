<template>
<div>
    <v-avatar
            :tile="tile"
            :size="avatarSize"
            color="grey lighten-4"
          >
            <img src="/apple-touch-icon-180x180.png" alt="avatar">
 </v-avatar>
<v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field><v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
</v-form>
         
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    profileCard(): any {
      return this.$store.state.ProfileStore;
    }
  }
});
</script>

<style>
</style>