<template>
  <section class="game-list">
    <!-- <ul> -->
    <!-- <ul> -->
    <li v-for="game in games" :key="game.id">
      <game-preview :game="game" />
    </li>
    <!-- </ul> -->
    <!-- </ul> -->
  </section>
</template>

<script>
// import gamePriview from "./gamePreview.vue";
import gamePreview from "./gamePreview.vue";
export default {
  name: "game-list",
  props: {
    games: { type: Array, required: true },
  },
  components: {
    gamePreview,
  },
  created() {},
  data() {},
};
</script>
