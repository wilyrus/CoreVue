type BarChartDataset = {
    label: string,
    data: Array<number>,
    backgroundColor: Array<string>
};

type ChartState = {
    labels: Array<string>,
    datasets: Array<BarChartDataset>
};

type ListState = {
    headers: any,
    gridData: any
};

export interface ChartsState {
    chartData: ChartState;
    listData: ListState;
}

type CardStore = {
    state: ChartsState
};

const store: CardStore = {
    state: {
        chartData: {
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
        listData: {
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Iron (%)', value: 'iron' }
            ],
            gridData: [
                {
                    name: 'Frozen Yogurt',
                    iron: '1%'
                },
                {
                    name: 'Ice cream sandwich',
                    iron: '1%'
                },
                {
                    name: 'Eclair',
                    iron: '7%'
                },
                {
                    name: 'Cupcake',
                    iron: '8%'
                },
                {
                    name: 'Gingerbread',
                    iron: '16%'
                },
                {
                    name: 'Jelly bean',
                    iron: '0%'
                },
                {
                    name: 'Lollipop',
                    iron: '2%'
                },
                {
                    name: 'Honeycomb',
                    iron: '45%'
                },
                {
                    name: 'Donut',
                    iron: '22%'
                },
                {
                    name: 'KitKat',
                    iron: '6%'
                }
            ]
        }
    }
};

export default store;
