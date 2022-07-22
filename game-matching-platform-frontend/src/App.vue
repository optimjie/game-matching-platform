<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import $ from 'jquery';
// import { ref } from 'vue';

import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
  // setup: () => {
  //   let bot_name = ref("");
  //   $.ajax({
  //     url: "http://localhost:9090/pk/getInfo",
  //     type: "get",
  //     success: resp => {
  //       bot_name.value = resp.name;
  //     }
  //   });
  //   return {
  //     bot_name
  //   }
  // }
}
</script>

<style>
body {
  background-image: url("assets/images/background.png");
  background-size: cover;
}
</style>
