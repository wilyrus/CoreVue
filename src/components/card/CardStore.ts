type CardState = {
    name: string,
    subname: string,
    description?: string,
    url?: string,
    text?: string,
    icon?: string
};

export interface CardsState {
    title: string;
    cards: Array<CardState>;
}

type CardStore = {
    state: CardsState
};

const store: CardStore = {
    state: {
        title: 'Dashboard',
        cards: [
            {
                name: 'Мои задачи',
                subname: 'subname1',
                icon: 'assignment'
            },
            {
                name: 'Сообщения',
                url: 'chat',
                subname: 'subname2',
                icon: 'mail_outline'
            },
            {
                name: 'Поручения',
                url: 'chat',
                subname: 'subname2',
                icon: 'file_copy'
            },
            {
                name: 'Командировки',
                url: 'chat',
                subname: 'subname2',
                icon: 'work_outline'
            }
        ]
    }
};

export default store;
