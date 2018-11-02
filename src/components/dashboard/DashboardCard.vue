<template>
    <div class="activity-card_container canvas-wrp">
        <span class="activity-card_title">
            <v-icon>assignment</v-icon>
            <span>Эффективность</span>
        </span>
        <div class="canvs-container" v-on:click="navigateToDashboardPage">
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
.canvas-wrp {
    height: 230px;
}
.canvs-container {
    height: 230px;
    width: auto;
}
</style>