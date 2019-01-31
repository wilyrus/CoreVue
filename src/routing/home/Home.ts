const HomeModule = () => import('../../modules/home/HomeModule.vue');

const homeRoutes = [{ name: 'home', path: '/home', component: HomeModule }];

export default homeRoutes;
