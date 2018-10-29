type ServiceState = {
    name: string,
    subname?: string,
    description?: string
}

export interface ServicesState {
    title: string,
    services: Array<ServiceState>
}

type ServiceStore = {
    state: ServicesState
}

const store: ServiceStore = {
    state: {
        title: 'Dashboard',
        services: [{
        name: 'Документооборот'
    },
    {
        name: 'Командировки',
    },
    {
        name: 'Закупки'
    }]
 }
  };

export default store;
