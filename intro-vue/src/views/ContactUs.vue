<template>
<div id='contact'>
    <router-view></router-view>
    <Header />
    <Footer />
    

    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Contact-Us",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>