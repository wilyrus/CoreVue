type ProfileState = {
    name: string,
    subname: string,
    description: string
};

type ProfileStore = {
    state: ProfileState
};

const store: ProfileStore = {
    state: {
        name: 'Марина Викторовна',
        subname: 'Одинцова',
        description: 'Ведущий специалист пресс-службы'
    }
};

export default store;
