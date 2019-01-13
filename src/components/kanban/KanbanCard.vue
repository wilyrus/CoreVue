<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="title font-weight-light">{{card.title}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">{{card.text}}</v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['card']
});
</script>

<style>
@media (min-width: 1000px) {
    .card-container {
        min-width: 15em;
        height: 15em;
    }
}
.card-title {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    font-weight: bold;
}
.card-container {
    display: flex;
    flex-direction: column;
    margin: 7px;
    padding: 15px 10px 10px;
    width: calc(50% - 14px);
    border-radius: 10px;
    background-color: #efeff4;
    position: relative;
    align-items: center;
    justify-content: center;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.2);
}

.icon-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-content .v-badge {
    position: absolute;
}
.icon-content .v-badge__badge {
    left: auto;
    top: auto;
    margin: -12px -25px 0 0;
}

.card-container .card-container__icon {
    color: #0071b9;
}

.card-text {
    padding: 10px;
}
.card-text:empty {
    display: none;
}
</style>