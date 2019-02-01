const HomeModule = () => import('../../modules/home/HomeModule.vue').then(m => m.default);

const homeRoutes = [{ name: 'home', path: '/home', component: HomeModule }];

export default homeRoutes;
