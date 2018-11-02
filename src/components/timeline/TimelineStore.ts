enum EventType {
    call = "phone",
    meet = "people",
    another = "calendar_today"
}

type TimelineState = {
    title: string,
    description: string,
    date?: Date,
    type: EventType
};

export interface TimelinesState {
    timelines: Array<TimelineState>;
}

type TimelineStore = {
    state: TimelinesState
};

const store: TimelineStore = {
    state: {
        timelines: [
            {
                title: 'Звонок',
                description: 'Созвониться с А.А. по поводу требований к продукту',
                type: EventType.call
            },
            {
                title: 'Встреча',
                description: 'Встреча с представителями компании С по поводу нового договора',
                type: EventType.meet
            },
            {
                title: 'Встреча',
                description: 'Провести встречу по текущему статусу разработки продукта',
                type: EventType.meet
            },
            {
                title: 'Анализ',
                description: 'Выполнение cost-benefit для процесса найма',
                type: EventType.another
            },
            {
                title: 'Отчёт',
                description: 'Отправвить еженедельный отчёт по подготовке релиза',
                type: EventType.another
            },
            {
                title: 'name6',
                description: 'description6',
                type: EventType.another
            }
        ]
    }
};

export default store;
