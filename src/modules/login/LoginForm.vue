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
     <v-btn v-on:click="navigateToHome" class="login-button" color="white">Войти</v-btn>
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

.form-container {
    display: flex;
    justify-content: center;
    padding: 25px;
    height: 100%;
}
.login-container {
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-top: -48px;
    flex: 1;
}
.picture-container{
    text-align: center;
    margin-top: -100px;
}
.login-title {
    font-size: 1.6em;
    font-weight: bold;
    width: 100%;
    color: #0271b9;
    text-align: center;
    margin: 60px 0 50px;
}

.form-group {
    background-color: #efeff4;
    padding: 13px 25px 25px;
    display: flex;
    flex-direction: column;
}
.login-container.login-button,
.login-container .v-btn:not(.v-btn--depressed):not(.v-btn--flat){
    text-transform: uppercase;
    color: #e74d3b;
    border: 1px solid #e74d3b !important;
    margin: 20px 0 15px;
    border-radius: 5px;
    box-shadow:  0 2px 2px 0 rgba(100,100,100,.14);
}
.form-container .login-button .v-btn__content {
    text-transform: uppercase;
    color: #e74d3b;
}
</style>