import KanbanBoards from './KanbanBoards.vue';
import KanbanBoard from './KanbanBoard.vue';

const KanbanRoutes = [
    {
        name: 'KanbanBoards',
        path: '/kanbanBoards',
        component: KanbanBoards
    },
    {
        name: 'KanbanBoard',
        path: '/kanbanBoards/:id',
        component: KanbanBoard
    }
];

export default KanbanRoutes;
