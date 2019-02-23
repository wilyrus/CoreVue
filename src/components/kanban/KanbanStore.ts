type KanbanCard = {
    id: string,
    title: string,
    description?: string
};

type ColumnType = {
    id: string,
    title: string,
    cards: Array<KanbanCard>,
    description?: string
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
        projects: []
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
        },
        addNewColumn(state: ProjectsState, draggableContext: NewCardContext) {
            const project = state.projects.find(pr => pr.id === draggableContext.projectId);

            if (project) {
                project.columns.push({
                    title: draggableContext.name,
                    id: `card${project.columns.length + 1}`,
                    description: draggableContext.description,
                    cards: []
                });
            }
        },
        removedColumn(state: ProjectsState, draggableContext: MoveContext) {
            const project = state.projects.find(pr => pr.id === draggableContext.projectId);

            if (project) {
                project.columns.splice(draggableContext.index, 1);
            }
        },
        addNewProject(state: ProjectsState, draggableContext: NewCardContext) {
            state.projects.push({
                name: draggableContext.name,
                icon: 'table_chart',
                description: draggableContext.description,
                id: `project.${state.projects}`,
                columns: []
            });
        }
    }
};

export default store;
