<template>
  <div id="app">

    <Modal />
    <Footer />
    <!-- <router-view/> -->
    <Header />
    <AddCountry />
    <MapConfig />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Header from "./components/Header";
import AddCountry from "./components/AddCountry";
import MapConfig from "./components/MapConfig";

export default {
  name: "App",
  components: {
    Modal,
    Footer,
    Header,
    AddCountry,
    MapConfig
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
