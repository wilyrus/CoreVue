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
                //text: 'Произвести инвентаризацию склада'
            },
            {
                name: 'Сообщения',
                url: 'chat',
                subname: 'subname2',
                icon: 'mail_outline'
                //text: 'Предлагаю запланировать встречу на 18 часов вечера'
            },
            {
                name: 'Документооборот',
                url: 'chat',
                subname: 'subname2',
                icon: 'file_copy'
            },
            {
                name: 'Командировки',
                url: 'chat',
                subname: 'subname2',
                icon: 'work_outline'
            },
            {
                name: 'Закупки',
                url: 'chat',
                subname: 'subname2',
                icon: 'outlined_flag'
            },
            {
                name: 'Чаты',
                url: 'chat',
                subname: 'subname2',
                icon: 'question_answer'
            }
        ]
    }
};

export default store;
