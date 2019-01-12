type KanbanCard = {
    id: Number,
    title: String
};

type ColumnType = {
    id: number,
    title: string,
    cards: Array<KanbanCard>
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
                        title: 'Старт',
                        cards: [
                            {
                                id: 1,
                                title: '1 задание старта'
                            },
                            {
                                id: 2,
                                title: '2 задание старта'
                            },
                            {
                                id: 3,
                                title: '3 задание старта'
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'В работе',
                        cards: [
                            {
                                id: 1,
                                title: '1 задание в работе'
                            },
                            {
                                id: 2,
                                title: '2 задание в работе'
                            },
                            {
                                id: 3,
                                title: '3 задание в работе'
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: 'Завершено',
                        cards: [
                            {
                                id: 1,
                                title: '1 завершенное задание'
                            },
                            {
                                id: 2,
                                title: '2 завершенное задание'
                            },
                            {
                                id: 3,
                                title: '3 завершенное задание'
                            }
                        ]
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
                        title: 'Старт',
                        cards: [
                            {
                                id: 1,
                                title: 'Старт'
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'В работе',
                        cards: [
                            {
                                id: 1,
                                title: 'Старт'
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: 'Завершено',
                        cards: [
                            {
                                id: 1,
                                title: 'Старт'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

export default store;
