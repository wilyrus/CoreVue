type ActivityState = {
    name: string,
    subname: string,
    description?: string
};

type ActivityStore = {
    state: ActivityState
};

const store: ActivityStore = {
    state: {
        name: 'Ближайшие события',
        subname: 'subname1',
        description: 'Созвониться с А.А. по поводу требований к продукту'
    }
};

export default store;
