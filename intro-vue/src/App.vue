<template>
  <div id="app">

    <Modal />
       
<Footer />
    <router-view/>
  </div>
</template>

<script>

import Footer from './components/Footer';
import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    Modal,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
