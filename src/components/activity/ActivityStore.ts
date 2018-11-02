type ActivityState = {
    name: string,
    subname: string,
    description?: string,
    icon?: string
};

type ActivityStore = {
    state: ActivityState
};

const store: ActivityStore = {
    state: {
        name: 'Ближайшие события',
        subname: 'subname1',
        icon: 'access_alarm',
        description: 'Созвониться с А.А. по поводу требований к продукту'
    }
};

export default store;
