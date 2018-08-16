<template>
<div class='content'>
  <div>
<h1>Welcome to Travel Bug</h1>
</div>
    <div>
      <div class='modal'>
        <div class='modal-container'>
          <div class='modal-header'>
            <slot name='login'>
      <div v-if='logseen' id='signin'>
        <form>
          <h3>Come Explore</h3>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            <input placeholder='Password' type='password' name='password' id='password' value=''>
            <input @click.prevent='bool' type='submit' value='Sign In'>
            <div>
            <label for='login'>New to Travel Bug?</label>
            </div>
            <div>
            <button v-on:click='seen ==! seen, logseen ==! logseen' type='submit' name='button'>Sign up now!</button>
            </div>
        </form>
        </div>
        </slot>
        <slot name='register'>
        <div v-if='seen' id='registrationForm'>
        <form @submit.prevent='sendCredentials()'>
          <h3>We are excited for your new ventures!</h3>
          <div>
            <input placeholder='First Name' type='text' name='firstName' id='firstName' value=''>
            </div>
            <div>
            <input placeholder='Last Name' type='text' name='lastName' id='lastName' value=''>
            </div>
            <div>
            <input placeholder='Email' type='text' name='email' id='email' value=''>
            </div>
            <div>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            </div>
            <div>
            <input placeholder='Password' type='text' name='passWord' id='passWord' value=''>
            </div>
            <div>
            <input placeholder='Confirm Password' type='text' name='confirmPassword' id='confirmPassword' value=''>
            </div>
            <div>
            <router-link to='/main' tag='button'>Create Profile</router-link>
            </div>
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
      name: "modal",
      signinUrl: "https://travel-bug-backend.herokuapp.com/profiles",
      form: {
        username: "",
        password: ""
      },
      profileData: null
    };
  },
  mounted() {
    fetch(this.signinUrl, {
      method: "get",
      mode: "cors",
      credentials: "same-origin",
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.profileData = resp;
        console.log(this.profileData.profile);
      });
  },

    methods: {
        verified(userid) {
            console.log("userid" + userid);
            console.log("verified");
            this.$router.push({ path: "main", query: { user: userid } });
        },
        notVerified() {
            console.log("notVerified");
        },
        bool() {
            console.log("bool is called");
            // console.log(document.querySelector("#username").value);
            // console.log(this.profileData.profile[0].username);

            for (let i = 0; i < this.profileData.profile.length; i++) {
                console.log(this.profileData.profile.length);
                console.log(this.profileData.profile[i].username);

        if (
          document.querySelector("#username").value ===
            this.profileData.profile[i].username &&
          document.querySelector("#password").value ===
            this.profileData.profile[i].password
        ) {
          this.verified(this.profileData.profile[i].id);
        } else {
          this.notVerified();
        }
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