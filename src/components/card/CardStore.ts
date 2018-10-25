type CardState = {
    name: string,
    subname: string,
    description: string
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
        name: 'name1',
        subname: 'subname1',
        description: 'description1',
    },
    {
        name: 'name2',
        subname: 'subname2',
        description: 'description2',
    },
    {
        name: 'name3',
        subname: 'subname3',
        description: 'description3',
    }]
 }
  };

export default store;
