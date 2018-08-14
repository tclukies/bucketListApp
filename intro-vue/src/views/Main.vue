<template>
<div id='main'>
    <router-view></router-view>
    <Header />
    <AddCountry />
    <MapConfig />
    <Footer />
    </div>
    
</template>

<script>
import Header from "@/components/Header";
import AddCountry from "@/components/AddCountry";
import MapConfig from "@/components/MapConfig";
import Footer from "@/components/Footer";
export default {
  name: "Main",
  components: {
    Header,
    AddCountry,
    MapConfig,
    Footer
  }
};
</script>

<style>
#main{
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
}
</style>
