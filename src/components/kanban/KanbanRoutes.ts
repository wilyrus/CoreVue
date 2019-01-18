import KanbanBoards from './KanbanBoards.vue';
import KanbanBoard from './KanbanBoard.vue';
import KanbanCardCreator from './KanbanCardCreator.vue';
import KanbanColumnCreator from './KanbanColumnCreator.vue';

const KanbanRoutes = [
    {
        name: 'KanbanBoards',
        path: '/kanbanBoards',
        component: KanbanBoards
    },
    {
        name: 'KanbanBoard',
        path: '/kanbanBoards/:projectId',
        component: KanbanBoard
    },
    {
        name: 'KanbanCardCreation',
        path: '/kanbanBoards/:projectId/addTo/:columnId',
        component: KanbanCardCreator
    },
    {
        name: 'KanbanColumnCreation',
        path: '/kanbanBoards/:projectId/addCard',
        component: KanbanColumnCreator
    }
];

export default KanbanRoutes;
