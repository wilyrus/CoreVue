<template>
  <v-app id="inspire">
      <div class="form-container">
          <div class="login-container">
          <span class="login-title">Авторизация</span>
          <div class="form-group">
    <v-form v-model="valid" class="login-from">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Логин"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Пароль"
        required
      ></v-text-field>
    </v-form>
     <v-btn v-on:click="navigateToHome" class="login-button">Войти</v-btn>
    </div>
    </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: (): any => ({
    valid: false,
    name: '',
    nameRules: [
      (v:string) => !!v || 'Name is required',
      (v:string) => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v:string) => !!v || 'E-mail is required',
      (v:string) => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
      navigateToHome() {
          this.$router.push('home')
      }
  }
});
</script>

<style>
.login-container {
    display: flex;
    flex-direction: column;
}
.login-title {
    font-size: 2.5em;
    width: 100%;
    text-align: center;
}
.form-container {
    flex: 1;
    justify-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
.form-group {
    background-color: #EFEFF4;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
}
.login-button {
    background-color: white;
    flex: 1;
}
</style>