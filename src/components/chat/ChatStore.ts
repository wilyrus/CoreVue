type MessagesState = {
    id: number,
    avatar: string,
    name?: string,
    date: Date,
    text: string
};

export interface CardsState {
    messages: Array<MessagesState>;
}

type CardStore = {
    state: CardsState
};

const store: CardStore = {
    state: {
        messages: [
            {
                id: 1,
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 2,
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                id: 3,
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 4,
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 5,
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                id: 6,
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            }
        ]
    }
};

export default store;
