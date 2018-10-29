type CardState = {
    name: string,
    subname: string,
    description?: string,
    text? : string
}

export interface CardsState {
    title: string,
    cards: Array<CardState>
}

type CardStore = {
    state: CardsState
}

const store: CardStore = {
    state: {
        title: 'Dashboard',
        cards: [{
        name: 'Задачи',
        subname: 'subname1',
        text: 'Произвести инвентаризацию склада'
        },
    {
        name: 'Сообщения',
        subname: 'subname2',
        text: 'Предлагаю запланировать встерчу на 18 часов вечера'
    }]
 }
  };

export default store;
