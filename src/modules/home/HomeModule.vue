<template>
    <div>
    <CardContainer/>
    <ActivityContainer/>
    <ServicesContainer/>
    <SocialContainer/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardContainer from '../../components/card/CardContainer.vue';
import ServicesContainer from '../../components/services/ServicesContainer.vue';
import SocialContainer from '../../components/social/SocialContainer.vue';
import ActivityContainer from '../../components/activity/ActivityContainer.vue';

export default Vue.extend({
  components: {
      CardContainer,
      ServicesContainer,
      SocialContainer,
      ActivityContainer
  }
});
</script>

<style>
</style>