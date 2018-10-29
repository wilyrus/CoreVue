<template>
      <div class="form-container">
          <div class="login-container">
          <picture class="picture-container">
 <source srcset="../../resources/logo.png">
 <img src="../../resources/logo.png">
</picture>
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: (): any => ({
        valid: false,
        name: '',
        nameRules: [(v: string) => !!v || 'Name is required', (v: string) => v.length <= 10 || 'Name must be less than 10 characters'],
        email: '',
        emailRules: [(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+/.test(v) || 'E-mail must be valid']
    }),
    methods: {
        navigateToHome() {
            this.$router.push('home');
        }
    }
});
</script>

<style>
.login-container {
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-top: -30px;
    margin-bottom: 30px;
    flex: 1;
}
.login-title {
    font-size: 2.5em;
    width: 100%;
    text-align: center;
}
.form-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    height: 100%;
}
.form-group {
    background-color: #efeff4;
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