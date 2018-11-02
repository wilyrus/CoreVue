<template>
    <div class="activity-card_container">
        <span class="activity-card_title">
            <v-icon>assignment</v-icon>
            <span>{{card.name}}</span>
        </span>
        <span class="card-text">{{card.description}}</span>
        <v-timeline class="timeline-preview" align-top dense>
            <v-timeline-item class="timeline-preview_item" color="green" small>
            </v-timeline-item>
            <v-timeline-item class="timeline-preview_item" color="green" small>
                <v-layout wrap pt-3>
                </v-layout>
            </v-timeline-item>

            <v-timeline-item class="timeline-preview_item" color="green" small>
            </v-timeline-item>

            <v-timeline-item class="timeline-preview_item" color="green" small>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['card']
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
    background-color: rgb(210, 210, 216);
    font-size: 1.1em;
}
.activity-card_container {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 50%;
    min-width: 10em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
    overflow: hidden;
}
.timeline-preview {
    transform: rotate(90deg);
    top: 17px;
}
.timeline-preview_item {
    height: 80px;
}
.card-text {
    padding: 10px;
}
</style>