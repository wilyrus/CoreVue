<template>
    <div class="canvs-container card-container" v-on:click="navigateToDashboardPage">
        <canvas id="myChart"></canvas>
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
.canvs-container {
    height: 200px;
    width: auto;
}
</style>