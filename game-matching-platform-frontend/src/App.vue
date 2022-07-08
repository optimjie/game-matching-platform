<template>
  <div>
    <div>Bot昵称：{{ bot_name }}</div>
  </div>
  <router-view></router-view>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: "App",
  setup: () => {
    let bot_name = ref("");

    $.ajax({
      url: "http://localhost:9090/pk/getInfo",
      type: "get",
      success: resp => {
        bot_name.value = resp.name;
      }
    });

    return {
      bot_name
    }
  }
}
</script>

<style>
body {
  background-image: url("assets/background.png");
  background-size: cover;
}
</style>
