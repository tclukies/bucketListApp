<template>
<div>
<h1>Welcome to Travel Bug</h1>
        <form @submit.prevent='searchForCredentials()'>
            <input v-model='username' placeholder='Username' type='text' name='username' id='username' value=''>
            <input v-model='password' placeholder='Password' type='text' name='password' id='password' value=''>
            <button type='submit' name='button'>Login</button>
            <label for='login'>New to Travel Bug?</label>
            <button type='submit' name='button'>Sign up now!</button>
        </form>
        <form @submit.prevent='sendCredentials()'>
            <input v-model='firstName' placeholder='First Name' type='text' name='firstName' id='firstName' value=''>
            <input v-model='lastName' placeholder='Last Name' type='text' name='lastName' id='lastName' value=''>
            <input v-model='email' placeholder='Email' type='text' name='email' id='email' value=''>
            <input v-model='username' placeholder='Username' type='text' name='username' id='username' value=''>
            <input v-model='password' placeholder='Password' type='text' name='passWord' id='passWord' value=''>
            <input v-model='confirmPassword' placeholder='Confirm Password' type='text' name='confirmPassword' id='confirmPassword' value=''>
            <button type='submit' name='button'>Create Profile</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>
 
<style>
</style>
