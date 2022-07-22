<template>
  <div class="play-ground">
    <GameMap />
  </div>
</template>

<script>
import GameMap from "./GameMap";

export default {
  name: "PlayGround",
  components: {
    GameMap,
  }
}
</script>

<style scoped>
.play-ground {
  width: 60vw;
  height: 70vh;
  background-color: lightblue;
  margin: 40px auto;  /* 上边界40px 左右居中 */
}
</style>