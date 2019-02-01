const Chat = () => import('../../modules/chat/Chat.vue').then(m => m.default);

const chatRoutes = [{ name: 'chat', path: '/chat', component: Chat }];

export default chatRoutes;
