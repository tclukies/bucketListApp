<template>
<div>
<h1>Welcome to Travel Bug</h1>
        <form @submit.prevent='searchForCredentials()'>
            <!-- <label for='login'>Login</label> -->
            <input v-model='userName' placeholder='Username' type='text' name='userName' id='userName' value=''>
            <input v-model='passWord' placeholder='Password' type='text' name='passWord' id='passWord' value=''>
            <button type='submit' name='button'>Login</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
 
<style>
/* p {
    color: blue;
} */
</style>
