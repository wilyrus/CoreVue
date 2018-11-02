import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginRout from './routing/login/LoginPage';
import HomeRout from './routing/home/Home';
import Timeline from './routing/timeline/Timeline';
import Profile from './routing/profile/Profile';
import Chat from './routing/chat/Chat';
import Dashboard from './routing/dashboard/Dashboard';

Vue.use(VueRouter);

const applicationRouter = new VueRouter({
    routes: LoginRout.concat(HomeRout, Timeline, Profile, Chat, Dashboard)
});

export default applicationRouter;
