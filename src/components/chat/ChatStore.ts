type MessagesState = {
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
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar2.jpg',
                name: 'Анатолий',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'Марина',
                date: new Date(),
                text: '123'
            }
        ]
    }
};

export default store;
