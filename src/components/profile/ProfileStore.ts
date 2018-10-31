type ProfileState = {
    name: string,
    subname: string,
    description: string
}

type ProfileStore = {
    state: ProfileState
}

const store: ProfileStore = {
    state: {
        name: 'Артём Михайлович',
        subname: 'Степанов',
        description: 'Ведущий специалист пресс-службы',
 }
  };

export default store;
