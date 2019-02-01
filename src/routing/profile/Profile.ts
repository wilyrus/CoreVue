const Profile = () => import('../../modules/Profile/Profile.vue').then(m => m.default);

const timelineRoutes = [{ name: 'profile', path: '/profile', component: Profile }];

export default timelineRoutes;
