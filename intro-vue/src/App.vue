<template>
  <div id="app">
    <!-- <Footer /> -->
    <router-view/>
    <Header />
    <AddCountry />
    <MapConfig />
    <Footer />
    <Modal />
  </div>
</template>

<script>
import Header from '@/components/Header';
import AddCountry from '@/components/AddCountry';
import MapConfig from '@/components/MapConfig';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';

export default {
  name: 'App',
  components: {
    Header,
    AddCountry,
    MapConfig,
    Footer,
    Modal,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
