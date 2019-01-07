type ServiceState = {
    name: string,
    subname?: string,
    description?: string,
    icon?: string
};

export interface ServicesState {
    title: string;
    services: Array<ServiceState>;
}

type ServiceStore = {
    state: ServicesState
};

const store: ServiceStore = {
    state: {
        title: 'Dashboard',
        services: [
            {
                name: 'Закупки',
                icon: 'assignment'
            }
        ]
    }
};

export default store;
