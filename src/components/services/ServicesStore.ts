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
                name: 'Документооборот',
                icon: 'folder_open'
            },
            {
                name: 'Командировки',
                icon: 'work_outline'
            },
            {
                name: 'Закупки',
                icon: 'assignment'
            }
        ]
    }
};

export default store;
