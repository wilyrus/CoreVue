<template>
    <div class="activity-card_container">
        <div class="activity-card-header">
            <v-icon class="activity-card-header__icon" large color="#0071b9">{{card.icon}}</v-icon>
            <span class="activity-card-header__title">{{card.name}}</span>
        </div>
        <div class="activity-card-description">{{card.description}}</div>
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
    .service-container {
        flex: 1;
    }
}
.card-title {
    padding: 5px;
}
.service-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-basis: 100%;
    min-width: 10em;
    height: 10em;
    border-radius: 10px;
    background-color: #efeff4;
}
.activity-card-description {
    width: 100%;
    padding: 0 15px 5px;
}
.activity-card-description:empty {
    display: none;
}
</style>