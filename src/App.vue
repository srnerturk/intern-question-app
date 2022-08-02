<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./layouts/MainLayout.vue";
export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import "./assets/scss/main.scss";
#app {
  background-color: $background-gray-200;
}
.container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
