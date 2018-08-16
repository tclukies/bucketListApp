<template>
<div class='footer'>
    <router-link to='/main' class='anchor'>Home</router-link>
    <router-link to='/about' class='anchor'>About</router-link>
    <router-link to='/faq' class='anchor'>FAQ</router-link>
    <router-link to='/contactus' class='anchor'>Contact Us</router-link>
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
  .anchor{
    color: black;
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: silver;
  }

  .anchor:hover{
    background-color: orange;
  }
</style>