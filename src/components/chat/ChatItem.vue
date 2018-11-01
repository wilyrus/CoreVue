<template>
    <div class="chat-card_container">
        <div class="chat_header">
            <v-avatar :tile="tile" :size="80" color="grey lighten-4">
                <img :src="message.avatar" alt="avatar">
            </v-avatar>
            <span class="activity-card_title">{{message.name}}</span>
            <span class="activity-card_title">{{message.date}}</span>
        </div>
        <span class="activity-card_title">{{message.text}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['message']
});
</script>

<style>
@media (min-width: 1000px) {
    .chat-card_container {
        min-width: 15em;
        height: 15em;
    }
}
.chat-card_container {
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 50%;
    min-width: 10em;
    height: 10em;
}
.chat_header {
    display: flex;
}
</style>