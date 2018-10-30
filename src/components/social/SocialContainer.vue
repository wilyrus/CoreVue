<template>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        cards(): any {
            return this.$store.state.SocialStore.cards;
        }
    }
});
</script>

<style>
</style>