import Vue from 'vue';
import Router from 'vue-router';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Footer',
      component: Footer,
    },
    {
      path: '/',
      name: 'Modal',
      component: Modal,
    },
  ],
});
