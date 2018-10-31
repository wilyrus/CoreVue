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
                avatar: '../../resources/avatar.jpg',
                name: 'subname1',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'subname2',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'subname3',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'subname4',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'subname5',
                date: new Date(),
                text: '123'
            },
            {
                avatar: '../../resources/avatar.jpg',
                name: 'subname6',
                date: new Date(),
                text: '123'
            }
        ]
    }
};

export default store;
