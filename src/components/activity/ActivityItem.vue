<template>
    <div class="activity-card_container">
    <span class="activity-card_title">{{card.name}}</span>
    <span>{{card.description}}</span>
            <v-timeline
             class="timeline-preview"
          align-top
          dense
        >
          <v-timeline-item
           class="timeline-preview_item"
            color="green"
            small
          >
            <v-layout pt-3>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item
           class="timeline-preview_item"
            color="green"
            small
          >
            <v-layout wrap pt-3>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
           class="timeline-preview_item"
            color="green"
            small
          >
            <v-layout pt-3>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item
           class="timeline-preview_item"
            color="green"
            small
          >
            <v-layout pt-3>
            </v-layout>
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
  }
.activity-card_container {
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-basis: 50%;
  min-width: 10em;
  height: 10em;
  border-radius: 10px;
  background-color: #EFEFF4;
}
.timeline-preview {
  transform: rotate(90deg);
    top: 80px;
}
.timeline-preview_item {
  height: 80px;
}
</style>