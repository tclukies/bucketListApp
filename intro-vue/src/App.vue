<template>
  <div id='app'>
    <router-view/>

  </div>
</template>

<script>
const API_URL = "https://travel-bug-backend.herokuapp.com/profiles";

export default {
  name: "Register",
  data() {
    return {
      registerURL: "https://travel-bug-backend.herokuapp.com/profiles",
      form: {
        username: "",
        password: ""
      },
      show: true
      // users: [],
    };
  },
  mounted() {
    fetch(this.registerURL, {
      method: "get",
      mode: "cors",
      credentials: "same-origin",
      headers: new Headers({ "Content-Type": "application/json" })
    }).then(resp => {
      // if (!resp.ok) {
      //   if (resp.status >= 400 || resp.status < 500) {
      //     return resp.json().then(data => {
      //       const err = { errorMessage: data.message };
      //       throw err;
      //     });
      //   }
      //   const err = { errorMessage: 'Blah' };
      //   throw err;
      // }
      return resp.json().then(resp => {
        console.log(resp);
      });
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
