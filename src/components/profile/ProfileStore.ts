type ProfileState = {
    name: string,
    subname: string,
    description: string,
    url: string
};

type ProfileStore = {
    state: ProfileState,
    mutations: {
        editProfile: (state: ProfileState, data: ProfileState) => void
    }
};

const store: ProfileStore = {
    state: {
        name: 'Марина Викторовна',
        subname: 'Одинцова',
        description: 'Ведущий специалист пресс-службы',
        url: '../../assets/avatar.jpg'
    },
    mutations: {
        editProfile(state: ProfileState, data: ProfileState) {
            console.log(state, data);
        }
    }
};

export default store;
