<template>
<div class='footer'>
    <router-link to='/about'>About</router-link>
    <router-link to='/faq'>FAQ</router-link>
    <router-link to='/contactus'>Contact Us</router-link>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>
 
<style>
</style>