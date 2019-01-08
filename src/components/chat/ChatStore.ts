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
                avatar: '../../assets/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 2,
                avatar: '../../assets/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                id: 3,
                avatar: '../../assets/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 4,
                avatar: '../../assets/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                id: 5,
                avatar: '../../assets/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                id: 6,
                avatar: '../../assets/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            }
        ]
    }
};

export default store;
