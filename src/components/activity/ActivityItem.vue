<template>
    <div class="activity-card_container activity-card_time">
        <div class="activity-card-header">
            <v-icon class="activity-card-header__icon" large color="#0071b9">{{card.icon}}</v-icon>
            <span class="activity-card-header__title">{{card.name}}</span>
        </div>
        <span class="activity-card-description">{{card.description}}</span>
        <v-timeline class="timeline-preview" align-top dense>
            <v-timeline-item fill-dot class="timeline-preview_item" color="rgb(0, 113, 185)" small>
            </v-timeline-item>
            <v-timeline-item fill-dot class="timeline-preview_item" color="rgb(0, 113, 185)" small>
            </v-timeline-item>

            <v-timeline-item fill-dot class="timeline-preview_item" color="rgb(0, 113, 185)" small>
            </v-timeline-item>

            <v-timeline-item fill-dot class="timeline-preview_item" color="rgb(0, 113, 185)" small>
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

.activity-card_container {
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 50%;
    min-width: 10em;
    border-radius: 10px;
    background-color: #efeff4;
    overflow: hidden;
    flex: none;
}

.activity-card_time{
    height: 160px;
}

.activity-card-header{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    flex: none;
}
.activity-card-header__icon{
    margin-right: 10px;
}
.activity-card-header__title{
    color: #000;
    font-weight: bold;
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