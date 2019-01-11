type ColumnType = {
    id: number,
    title: string
};

type ProjectsColumns = Array<ColumnType>;

export type KanbanProject = {
    name: string,
    description: string,
    date?: Date,
    id: Number,
    columns: ProjectsColumns
};

export interface ProjectsState {
    projects: Array<KanbanProject>;
}

type ProjectsStore = {
    state: ProjectsState
};

const store: ProjectsStore = {
    state: {
        projects: [
            {
                name: 'Разработка списка',
                description: 'Созвониться с А.А. по поводу требований к продукту',
                id: 1,
                columns: [
                    {
                        id: 1,
                        title: 'Старт'
                    },
                    {
                        id: 2,
                        title: 'В работе'
                    },
                    {
                        id: 3,
                        title: 'Завершено'
                    }
                ]
            },
            {
                name: 'Разработка канбана',
                description: 'Встреча с представителями компании С по поводу нового договора',
                id: 2,
                columns: [
                    {
                        id: 1,
                        title: 'Старт'
                    },
                    {
                        id: 2,
                        title: 'В работе'
                    },
                    {
                        id: 3,
                        title: 'Завершено'
                    }
                ]
            }
        ]
    }
};

export default store;
