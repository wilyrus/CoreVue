<template>
    <div class="canvs-container card-container">
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
                data: {
                    labels: ['RDN', 'Дизайн', 'Аналитика', 'QA'],
                    datasets: [
                        {
                            label: 'Загруженность отделов',
                            data: [19, 17, 3, 5],
                            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
                        },
                        {
                            label: 'Персонал',
                            data: [3, 2, 4, 6],
                            backgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4)']
                        }
                    ]
                },
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
    }
});
</script>
<style>
.canvs-container {
    height: 200px;
    width: auto;
}
</style>