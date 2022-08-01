<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import "./assets/scss/main.scss";
#app {
  background-color: $background-gray-200;
}
</style>
