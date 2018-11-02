<template>
    <div>
        <div class="canvs-container card-container">
            <canvas id="myChart"></canvas>
        </div>
        <v-data-table :headers="headers" :items="gridData" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.load }}</td>
                <td>{{ props.item.people }}</td>
            </template>
        </v-data-table>
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
    computed: {
        headers(): any {
            return this.$store.state.DashboardStore.listData.headers;
        },
        gridData(): any {
            return this.$store.state.DashboardStore.listData.gridData;
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