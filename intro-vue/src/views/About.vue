<template>
<div id='about'>
    <router-view></router-view>
    <Header />
    <Footer />
    

    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
