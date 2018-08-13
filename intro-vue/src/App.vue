<template>
  <div id="app">

    <Modal />
    <Footer />
    <!-- <router-view/> -->
    <Header />
    <AddCountry />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Header from "./components/Header";
import AddCountry from "./components/AddCountry";

export default {
  name: "App",
  components: {
    Modal,
    Footer,
    Header,
    AddCountry
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
