const CardList = () => import('../../modules/cardList/CardList.vue').then(m => m.default);

const cardListRoutes = [{ name: 'CardList', path: '/CardList', component: CardList }];

export default cardListRoutes;
