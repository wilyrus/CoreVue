type ProfileState = {
    name: string,
    subname: string,
    description: string,
    url: string
};

type ProfileStore = {
    state: ProfileState
};

const store: ProfileStore = {
    state: {
        name: 'Марина Викторовна',
        subname: 'Одинцова',
        description: 'Ведущий специалист пресс-службы',
        url: '../../assets/avatar.jpg'
    }
};

export default store;
