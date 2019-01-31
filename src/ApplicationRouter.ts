import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginRout from './routing/login/LoginPage';
import HomeRout from './routing/home/Home';
import Timeline from './routing/timeline/Timeline';
import Profile from './routing/profile/Profile';
import Chat from './routing/chat/Chat';
import Dashboard from './routing/dashboard/Dashboard';
import CardList from './routing/cardList/CardList';
import KanbanRoutes from './components/kanban/KanbanRoutes';

Vue.use(VueRouter);

const applicationRouter = new VueRouter({
    // @ts-ignore
    routes: LoginRout.concat(HomeRout, Timeline, Profile, Chat, Dashboard, CardList, KanbanRoutes)
});

export default applicationRouter;
