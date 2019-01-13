<template>
  <div
    class="activity-card_container canvas-wrp"
    v-on:click="navigateToDashboardPage"
  >
    <div class="activity-card-header">
      <v-icon
        class="activity-card-header__icon"
        medium
        color="#0071b9"
      >bar_chart</v-icon>
      <span class="activity-card-header__title">Эффективность</span>
      <v-icon
        class="activity-card-header__icon navigation_arrow"
        medium
        color="#0071b9"
      >keyboard_arrow_right</v-icon>
    </div>
    <div class="canvas-container">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Chart from 'chart.js';

export default Vue.extend({
    mounted() {
        var ctx = document.getElementById('myChart');
        if (ctx) {
            // @ts-ignore
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: this.$store.state.DashboardStore.chartData,
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                },
                                stacked: true
                            }
                        ],
                        xAxes: [
                            {
                                stacked: true
                            }
                        ]
                    },
                    aspectRatio: 2
                }
            });
        }
    },
    methods: {
        navigateToDashboardPage() {
            this.$router.push('/dashboard');
        }
    }
});
</script>
<style>
.canvas-container {
    height: 175px;
    width: auto;
    padding: 0 10px;
}
</style>