import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginRout from './routing/login/LoginPage';
import HomeRout from './routing/home/Home';

Vue.use(VueRouter);

const applicationRouter = new VueRouter({
    routes: LoginRout.concat(HomeRout)
  })

  export default applicationRouter;