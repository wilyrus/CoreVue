<template>
    <div class="activity-card_container">
                <v-avatar
            :tile="tile"
            :size="80"
            color="grey lighten-4"
          >
            <img :src="message.avatar" alt="avatar">
          </v-avatar>
        <span class="activity-card_title">{{message.name}}</span>
        <span class="activity-card_title">{{message.date}}</span>
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
    .activity-card_container {
        min-width: 15em;
        height: 15em;
    }
}
.activity-card_title {
    padding: 5px;
}
.activity-card_container {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 50%;
    min-width: 10em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
}
.timeline-preview {
    transform: rotate(90deg);
    top: 80px;
}
.timeline-preview_item {
    height: 80px;
}
</style>