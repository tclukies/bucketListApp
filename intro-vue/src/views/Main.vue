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
    <MapConfig />
    </div>
    </div>
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
.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.header {
  display: flex;
  justify-content: flex-end;
}
#main {
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
}
</style>
