<template>
  <div ref="parent" class="game-map">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { GameMap } from "../../assets/script/GameMap";
import { ref, onMounted } from 'vue';

export default {
  name: "GameMap",
  setup() {
    let parent = ref(null);
    let canvas = ref(null);
    onMounted(() => {
      new GameMap(canvas.value.getContext('2d'), parent.value);
    })
    return {
      parent,
      canvas
    }
  }
}
</script>

<style scoped>
.game-map {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}
</style>