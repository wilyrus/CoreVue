import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginRout from './routing/login/LoginPage';
import HomeRout from './routing/home/Home';
import Timeline from './routing/timeline/Timeline';

Vue.use(VueRouter);

const applicationRouter = new VueRouter({
    routes: LoginRout.concat(HomeRout, Timeline)
  })

  export default applicationRouter;