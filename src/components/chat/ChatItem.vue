<template>
    <div class="chat-message" v-bind:class="{ personal: isPersonal }">
        <div class="chat-message__header">
            <v-avatar class="chat-header-avatar" :size="35">
                <img :src="message.avatar" alt="avatar">
            </v-avatar>
            <div class="chat-header-text">
                <span class="chat-header-text__name">{{message.name}}</span>
                <span class="chat-header-text__date">{{message.date}}</span>
            </div>
        </div>
        <div class="chat-message_text">{{message.text}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['message'],
    data() {
        return {
            isPersonal: this.$props.message.name === 'Марина'
        };
    }
});
</script>

<style>
@media (min-width: 1000px) {
    .chat-card_container {
        min-width: 15em;
        height: 15em;
    }
}
.chat-message {
    background-color: #efeff4;
    border: 1px solid rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
    flex: none;
    padding: 10px;
    border-radius: 10px;
}
.chat-message.personal{
    align-self: flex-end;
}

.chat-message__header {
    display: flex;
    max-width: 100%;
    flex: none;
}
.chat-header-text{
    flex: 1 1 auto;
    margin-left: 15px;
}
.chat-header-text__name{
    display: inline-block;
    width: 100%;
    font-weight: bold;
}
.chat-header-text__date{
    display: inline-block;
    font-size: 12px;
    color: #a0a0a1;
}
.chat-message_text{
    width: 100%;
    padding: 10px 0 0;
}
</style>