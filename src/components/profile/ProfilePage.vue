<template>
  <div class="profile-page">
    <v-card class="profile_card">
      <v-avatar
        :size="120"
        color="grey lighten-4"
      >
        <img
          :src=profileCard.url
          alt="avatar"
        >
      </v-avatar>
      <v-form
        class="profile-form"
        ref="form"
      >
        <v-text-field
          :value="profileCard.name"
          label="Name"
          required
          :rules="notEmptyRule"
        ></v-text-field>
        <v-text-field
          :value="profileCard.sername"
          label="Sername"
          required
          :rules="notEmptyRule"
        ></v-text-field>
        <v-text-field
          :value="profileCard.fathersName"
          label="Father's name"
          required
          :rules="notEmptyRule"
        ></v-text-field>
        <v-text-field
          :value="profileCard.email"
          label="E-mail"
          required
          :rules="notEmptyRule"
        ></v-text-field>
      </v-form>
      <v-btn
        v-on:click="save"
        color="Blue"
      >Save</v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: () => ({
        notEmptyRule: [(v: any) => !!v || 'Field is required']
    }),
    computed: {
        profileCard(): any {
            return this.$store.state.ProfileStore;
        }
    },
    methods: {
        async save() {
            // @ts-ignore
            if (this.$refs.form.validate()) {
                await this.$store.commit('saveProfile', 'Profile');
                this.$router.push('login');
            }
        }
    },
    mounted() {
        this.$store.commit('updateNavigationTitle', 'Profile');
    }
});
</script>

<style>
.profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile_card {
    min-width: 300px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}
.profile-form {
    width: 100%;
    padding: 15px;
}
</style>