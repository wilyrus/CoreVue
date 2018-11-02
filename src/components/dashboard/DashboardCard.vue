<template>
    <div class="activity-card_container canvas-wrp">
        <div class="activity-card-header">
            <v-icon class="activity-card-header__icon" large color="#0071b9">bar_chart</v-icon>
            <span class="activity-card-header__title">Эффективность</span>
        </div>
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
.activity-card-header{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    flex: none;
}
.activity-card-header__icon{
    margin-right: 5px;
}
.activity-card-header__title{
    color: #000;
    font-weight: bold;
}
.canvs-container {
    height: 230px;
    width: auto;
    padding: 0 10px;
}
</style>