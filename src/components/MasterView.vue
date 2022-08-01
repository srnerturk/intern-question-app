<template>
  <div>
    <navbar-container />
    <div class="row">
      <side-bar />
      <slot />
      <div class="card">
        <CardStats />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarContainer from "./NavbarContainer.vue";
import SideBar from "./SideBar.vue";
import CardStats from "./CardStats.vue";
export default {
  components: { NavbarContainer, SideBar, CardStats },
  name: "MasterView",
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  .card {
    margin-right: 80px;
  }
}
</style>
