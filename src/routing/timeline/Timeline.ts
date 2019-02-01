const ActivityTimeline = () => import('../../modules/timeline/ActivityTimeline.vue').then(m => m.default);

const timelineRoutes = [{ name: 'timeline', path: '/timeline', component: ActivityTimeline }];

export default timelineRoutes;
