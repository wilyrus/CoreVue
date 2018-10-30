<template>
<div class="profile-page">
    <v-avatar
            :tile="tile"
            :size="120"
            color="grey lighten-4"
          >
            <img src="../../resources/avatar.jpg" alt="avatar">
 </v-avatar>
<v-form class="profile-form" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        label="Имя"
        readonly="true"
      ></v-text-field>
      <v-text-field
        v-model="sername"
        label="Фамилия"
        readonly="true"
      ></v-text-field>
      <v-text-field
        v-model="fathersName"
        label="Отчество"
        readonly="true"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        readonly="true"
      ></v-text-field>
</v-form>
         
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: 'Роберт',
            sername: 'Паттисон',
            fathersName: 'Михайлович',
            email: 'pattison@gmail.com'
        };
    },
    computed: {
        profileCard(): any {
            return this.$store.state.ProfileStore;
        }
    }
});
</script>

<style>
.profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile-form {
    width: 100%;
    padding: 10px;
}
</style>