<template>
  <div class="main-layout">
    <navbar-container />
    <div class="container">
      <div class="left-side side">
        <side-bar />
      </div>
      <div class="center-side side">
        <slot />
      </div>
      <div class="right-side side">
        <card-stats />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarContainer from "@/components/NavbarContainer.vue";
import SideBar from "@/components/SideBar.vue";
import CardStats from "@/components/CardStats.vue";
export default {
  name: "MainLayout",
  components: {
    NavbarContainer,
    SideBar,
    CardStats,
  },
};
</script>

<style lang="scss">
.main-layout {
  .container {
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .side {
    flex: 1;
  }
  .left-side,
  .right-side {
    flex: none;
  }
  .center-side {
    background: #fff;
  }
}
</style>
