<template>
<div class='content'>
  <div>
<h1>Welcome to Travel Bug</h1>
</div>
    <div class='modal-backdrop'>
      <div class='modal'>
        <div class='modal-container'>
          <div class='modal-header'>
            <slot name='login'>
      <div v-if='logseen' id='signin'>
        <form @submit.prevent='searchForCredentials()'>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            <input placeholder='Password' type='text' name='password' id='password' value=''>
            <router-link to='/main' tag='button'>Sign In</router-link>
            <div>
            <label for='login'>New to Travel Bug?</label>
            </div>
            <div>
            <button v-on:click='seen =! seen, logseen =! logseen' type='submit' name='button'>Sign up now!</button>
            </div>
        </form>
        </div>
        </slot>
        <slot name='register'>
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
             </slot>       
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      seen: false,
      logseen: true,
      name: "modal"
    };
  }
};
</script>
 
<style scope>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
#signin {
  display: flex;
  flex-wrap: column;
}
</style>
