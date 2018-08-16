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
    text-decoration: none;
    color: black;
    background-color: orange;
    border: 2px solid black;
    border-radius: 5px;
    padding-left:3px;;
    padding-right: 3px;
  }

  .anchor:hover{
    color: orange;
    background-color: black;
  }
</style>