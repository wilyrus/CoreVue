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
            headers: [{ text: 'Отдел', value: 'name' }, { text: 'Загруженность', value: 'load' }, { text: 'Персонал', value: 'people' }],
            gridData: [
                {
                    name: 'RDN',
                    load: 19,
                    people: 3
                },
                {
                    name: 'Дизайн',
                    load: 17,
                    people: 2
                },
                {
                    name: 'Аналитика',
                    load: 3,
                    people: 4
                },
                {
                    name: 'QA',
                    load: 5,
                    people: 6
                }
            ]
        }
    }
};

export default store;
