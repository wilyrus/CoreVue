<template>
  <div class="chat-container">    
      <div class="messages-container">
          <template v-for="message in messages" >
      <chat-item :key="message.name" v-bind:message="message"></chat-item>
    </template>
</div>
          <v-form v-model="valid" class="login-from">
      <v-text-field
        v-model="name"
        label="Chat in welcome..."
      ></v-text-field>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChatItem from './ChatItem.vue';
import { TweenLite } from 'gsap';

export default Vue.extend({
    computed: {
        messages(): any {
            return this.$store.state.ChatStore.messages;
        }
    },
    components: {
        ChatItem
    }
});
</script>

<style>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.messages-container {
    flex: 1;
    overflow: auto;
}
</style>