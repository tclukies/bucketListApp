import Vue from 'vue';
import Router from 'vue-router';
import Front from '../views/Front';
// import AddCountry from '../components/AddCountry';
// import MapConfig from '@/components/MapConfig';
import Main from '@/views/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front,
    },
    // {
    //   path: '/',
    //   name: 'AddCountry',
    //   component: AddCountry,
    // },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
