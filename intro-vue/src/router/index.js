import Vue from 'vue';
import Router from 'vue-router';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
    {
      path: '/',
      name: 'Header',
      component: Header,
    },
  ],
});
