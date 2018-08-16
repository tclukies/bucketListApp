// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Main from './views/Main';
import Footer from './components/Footer';
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyASCy4vaXQzI49aGBeT6E1if9kGl9Dp2gA',
    libraries: 'places'
  },
})

Vue.use(VueAxios, axios)

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

Vue.component('b-modal', bModal);
// Vue.directive('b-modal', bModalDirective);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Main,
  Footer,
  components: { App },
  template: '<App/>',
});
