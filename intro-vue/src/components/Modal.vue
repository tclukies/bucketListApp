<template>
<div>
<h1>Welcome to Travel Bug</h1>
<div id='sigin'>
        <form @submit.prevent='searchForCredentials()'>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            <input placeholder='Password' type='text' name='password' id='password' value=''>
            <router-link to='/main' tag='button'>Sign In</router-link>
            <label for='login'>New to Travel Bug?</label>
            <button v-on:click='seen =! seen' type='submit' name='button'>Sign up now!</button>
        </form>
        </div>
        <div v-if='seen' id='registrationForm'>
        <form @submit.prevent='sendCredentials()'>
            <input placeholder='First Name' type='text' name='firstName' id='firstName' value=''>
            <input placeholder='Last Name' type='text' name='lastName' id='lastName' value=''>
            <input placeholder='Email' type='text' name='email' id='email' value=''>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            <input placeholder='Password' type='text' name='passWord' id='passWord' value=''>
            <input placeholder='Confirm Password' type='text' name='confirmPassword' id='confirmPassword' value=''>
            <router-link to='/main' tag='button'>Create Profile</router-link>
        </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      seen: false,
    };
  }
};
</script>
 
<style>
</style>
