<template>
<div id='country'>
     <form @submit.prevent='searchForCredentials()'>
         <label for='addToList'>Add to Your Bucket List</label>
         <div>
            <input v-model='location' placeholder='location' type='text' name='location' id='location' value=''>
            </div>
            <div>
            <textarea v-model='activities' placeholder='activities' type='text' name='activities' id='activities' value=''>Add activities here!</textarea>
                     </div>
            <button type='addNow' name='button'>Add Now!</button>
            
        </form>
    </div>
</template>

<script>
export default {
  name: "AddCountry",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
 
<style>
</style>