enum EventType {
    call = "phone",
    meet = "people",
    another = "calendar_today"
}

type BoardState = {
    title: string,
    description: string,
    date?: Date,
    type: EventType
};

export interface BoardsState {
    boards: Array<BoardState>;
}

type BoardsStore = {
    state: BoardsState
};

const store: BoardsStore = {
    state: {
        boards: [
            {
                title: 'Звонок',
                description: 'Созвониться с А.А. по поводу требований к продукту',
                type: EventType.call
            },
            {
                title: 'Встреча',
                description: 'Встреча с представителями компании С по поводу нового договора',
                type: EventType.meet
            }
        ]
    }
};

export default store;
