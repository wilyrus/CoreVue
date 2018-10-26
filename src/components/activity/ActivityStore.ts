type ActivityState = {
    name: string,
    subname: string,
    description?: string
}

type ActivityStore = {
    state: ActivityState
}

const store: ActivityStore = {
    state: {
        name: 'Активность',
        subname: 'subname1'
 }
  };

export default store;
