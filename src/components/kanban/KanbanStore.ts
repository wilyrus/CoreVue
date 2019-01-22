type KanbanCard = {
    id: string,
    title: string,
    description?: string
};

type ColumnType = {
    id: string,
    title: string,
    cards: Array<KanbanCard>
};

type ProjectsColumns = Array<ColumnType>;

type MoveContext = {
    columnId: string,
    index: number,
    card: KanbanCard,
    projectId: string
};

export type KanbanProject = {
    name: string,
    description?: string,
    icon?: string,
    date?: Date,
    id: string,
    columns: ProjectsColumns
};

export interface ProjectsState {
    projects: Array<KanbanProject>;
}

type ProjectsStore = {
    state: ProjectsState,
    mutations: any
};

type NewCardContext = {
    projectId: string,
    name: string,
    description: string,
    columnId: string
};

const store: ProjectsStore = {
    state: {
        projects: [
            {
                name: 'Разработка списка',
                description: 'Созвониться с А.А. по поводу требований к продукту',
                id: 'project.1',
                icon: 'calendar_today',
                columns: [
                    {
                        id: 'column.1',
                        title: 'Старт',
                        cards: [
                            {
                                id: 'card.1',
                                title: '1 задание старта'
                            },
                            {
                                id: 'card.2',
                                title: '2 задание старта'
                            },
                            {
                                id: 'card.3',
                                title: '3 задание старта'
                            }
                        ]
                    },
                    {
                        id: 'column.2',
                        title: 'В работе',
                        cards: [
                            {
                                id: 'card.11',
                                title: '1 задание в работе'
                            },
                            {
                                id: 'card.22',
                                title: '2 задание в работе'
                            },
                            {
                                id: 'card.33',
                                title: '3 задание в работе'
                            }
                        ]
                    },
                    {
                        id: 'column.3',
                        title: 'Завершено',
                        cards: [
                            {
                                id: 'card.111',
                                title: '1 завершенное задание'
                            },
                            {
                                id: 'card.222',
                                title: '2 завершенное задание'
                            },
                            {
                                id: 'card.333',
                                title: '3 завершенное задание'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Разработка канбана',
                icon: 'table_chart',
                description: 'Встреча с представителями компании С по поводу нового договора',
                id: 'project.2',
                columns: [
                    {
                        id: 'column.4',
                        title: 'Старт',
                        cards: [
                            {
                                id: 'card.4',
                                title: 'Старт'
                            }
                        ]
                    },
                    {
                        id: 'cloumn.5',
                        title: 'В работе',
                        cards: [
                            {
                                id: 'card.5',
                                title: 'Старт'
                            }
                        ]
                    },
                    {
                        id: 'column.6',
                        title: 'Завершено',
                        cards: [
                            {
                                id: 'card.6',
                                title: 'Старт'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    mutations: {
        addedCard(state: ProjectsState, draggableContext: MoveContext) {
            const project = state.projects.find(pr => pr.id === draggableContext.projectId);

            if (project) {
                const column = project.columns.find(cl => cl.id === draggableContext.columnId);

                if (column) {
                    column.cards.splice(draggableContext.index, 0, draggableContext.card);
                }
            }
        },
        removedCard(state: ProjectsState, draggableContext: MoveContext) {
            const project = state.projects.find(pr => pr.id === draggableContext.projectId);

            if (project) {
                const column = project.columns.find(cl => cl.id === draggableContext.columnId);

                if (column) {
                    column.cards.splice(draggableContext.index, 1, draggableContext.card);
                }
            }
        },
        addNewCard(state: ProjectsState, draggableContext: NewCardContext) {
            const project = state.projects.find(pr => pr.id === draggableContext.projectId);

            if (project) {
                const column = project.columns.find(cl => cl.id === draggableContext.columnId);

                if (column) {
                    column.cards.push({ title: draggableContext.name, id: `card${column.cards.length + 1}`, description: draggableContext.description });
                }
            }
        }
    }
};

export default store;
