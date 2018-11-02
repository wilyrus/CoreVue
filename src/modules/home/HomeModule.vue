<template>
    <div>
        <CardContainer />
        <ActivityContainer />
        <DashboardCard />
        <ServicesContainer />
        <SocialContainer />
        <ProfileCard />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardContainer from '../../components/card/CardContainer.vue';
import ServicesContainer from '../../components/services/ServicesContainer.vue';
import SocialContainer from '../../components/social/SocialContainer.vue';
import ActivityContainer from '../../components/activity/ActivityContainer.vue';
import ProfileCard from '../../components/profile/ProfileCard.vue';
import DashboardCard from '../../components/dashboard/DashboardCard.vue';

export default Vue.extend({
    components: {
        CardContainer,
        ServicesContainer,
        DashboardCard,
        SocialContainer,
        ActivityContainer,
        ProfileCard
    }
});
</script>

<style>
</style>