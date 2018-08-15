<template>
<div id='faq'>
    <router-view></router-view>
    <Header />
    <Footer />
    

    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "FAQ",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
