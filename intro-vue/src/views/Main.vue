<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    </div>
    <div class='horizontal'>
    <div>
    <AddCountry />
    </div>
    <div>
    <Locations />
    </div>
    <div>
    <MapConfig />
    </div>
    </div>
    <Footer />
    </div>
    
</template>

<script>
import Header from "@/components/Header";
import AddCountry from "@/components/AddCountry";
import Locations from "@/components/Locations";
import MapConfig from "@/components/MapConfig";
import Footer from "@/components/Footer";
export default {
  name: "Main",
  components: {
    Header,
    AddCountry,
    Locations,
    MapConfig,
    Footer
  }
};
</script>

<style>
.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.header {
  display: flex;
  justify-content: flex-end;
  background-color: #C9F0FF;
}
.destination {
  background-color: #C9F0FF;
}
#main {
  display: flex;
  flex-direction: column;
  background: cover;
  /* height: 200vh; */
  justify-content: space-between;
  background-color: rgba(247, 178, 49, 0.877);
}
</style>
