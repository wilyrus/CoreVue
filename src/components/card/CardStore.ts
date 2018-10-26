type CardState = {
    name: string,
    subname: string,
    description?: string
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
        subname: 'subname1'
        },
    {
        name: 'Сообщения',
        subname: 'subname2'
    }]
 }
  };

export default store;
