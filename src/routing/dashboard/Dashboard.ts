const Dashboard = () => import('../../modules/dashboard/Dashboard.vue').then(m => m.default);

const dashboardRoutes = [{ name: 'dashboard', path: '/dashboard', component: Dashboard }];

export default dashboardRoutes;
