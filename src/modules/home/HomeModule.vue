<template>
    <div>
    <CardContainer/>
    <ActivityContainer/>
    <ServicesContainer/>
    <SocialContainer/>
    <ProfileCard/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardContainer from '../../components/card/CardContainer.vue';
import ServicesContainer from '../../components/services/ServicesContainer.vue';
import SocialContainer from '../../components/social/SocialContainer.vue';
import ActivityContainer from '../../components/activity/ActivityContainer.vue';
import ProfileCard from '../../components/profile/ProfileCard.vue';

export default Vue.extend({
    components: {
        CardContainer,
        ServicesContainer,
        SocialContainer,
        ActivityContainer,
        ProfileCard
    }
});
</script>

<style>
</style>