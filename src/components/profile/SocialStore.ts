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
        name: 'name1',
        subname: 'subname1',
        description: 'description1',
 }
  };

export default store;
