<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
const API_URL = "https://travel-bug-backend.herokuapp.com/profiles";

export default {
  name: "Register",
  data() {
    return {
      registerURL: "https://gvideos-api.herokuapp.com/auth/register",
      form: {
        username: "",
        password: ""
      },
      show: true
      // users: [],
    };
  },
  methods: {
    onLoad(evt) {
      evt.preventDefault();
      return fetch(this.API_URL, {
        method: "get",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.form)
      }).then(resp => {
        console.log(resp);
        if (!resp.ok) {
          if (resp.status >= 400 || resp.status < 500) {
            return resp.json().then(data => {
              const err = { errorMessage: data.message };
              throw err;
            });
          }
          const err = { errorMessage: "Blah" };
          throw err;
        }
        return resp.json();
      });
    }
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
