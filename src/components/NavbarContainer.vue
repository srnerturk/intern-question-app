<template>
  <header class="header-container">
    <div class="navbar-brand">
      <buttonBase
        :color="['backwhite', 'fontblue']"
        size=""
        fontfamily=""
        class="btn-brand"
        @click="onClick"
        >Discy</buttonBase
      >
    </div>
    <div class="navbar-menu">
      <ul>
        <buttonBase
          :color="[
            'backwhite',
            'fontblack',
            'hoverbackblack',
            'hoverfontwhite',
          ]"
          size=""
          fontfamily="roboto"
          class="btn-menu"
          @click="onClick"
          >Home</buttonBase
        >
      </ul>
      <ul>
        <buttonBase
          :color="[
            'backwhite',
            'fontblack',
            'hoverbackblack',
            'hoverfontwhite',
          ]"
          size=""
          fontfamily="roboto"
          class="btn-menu"
          @click="onClick"
          >About Us</buttonBase
        >
      </ul>
      <ul>
        <buttonBase
          :color="[
            'backwhite',
            'fontblack',
            'hoverbackblack',
            'hoverfontwhite',
          ]"
          size=""
          fontfamily="roboto"
          class="btn-menu"
          @click="onClick"
          >Blog</buttonBase
        >
      </ul>
      <ul>
        <buttonBase
          :color="[
            'backwhite',
            'fontblack',
            'hoverbackblack',
            'hoverfontwhite',
          ]"
          size=""
          fontfamily="roboto"
          class="btn-menu"
          @click="onClick"
          >Contact Us</buttonBase
        >
      </ul>
      <div class="search-bar">
        <div class="search">
          <input
            type="text"
            class="text-term"
            placeholder="Type Search Words"
          />
          <div @click="click">
            <button @click="onClick" type="îcon" class="icon-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#677075"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="login-container">
        <ul>
          <buttonBase
            :color="['fontgrey', 'backwhite', 'hoverfontwhite', 'hoverbackred']"
            size=""
            fontfamily="roboto"
            class="btn"
            @click="onClick"
            >Sign In</buttonBase
          >
        </ul>
        <ul>
          <buttonBase
            :color="['backblue', 'fontwhite', 'hoverbackblack']"
            size=""
            fontfamily="roboto"
            class="btn"
            @click="onClick"
            >Sign Up</buttonBase
          >
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import buttonBase from "./buttonBase.vue";
import "../assets/scss/variables/_colors.scss";
export default {
  methods: {
    click() {
      this.$emit("click");
    },
    onClick() {
      alert();
    },
  },
  name: "NavbarContainer",
  components: {
    buttonBase,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.header-container {
  background-color: #ffffff;
  border-bottom-style: solid;
  border-color: $background-gray-400;
  border-width: 1px;
}
.navbar-menu {
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  grid-gap: 10px;
  margin-top: -3.4%;
  margin-left: 38%;
  height: 80px;
}
.login-container {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  grid-gap: 10px;
}

.navbar-brand {
  font-size: 25px;
  margin-right: 40%;
}
.btn {
  padding: 4.5px 9px;
}
.btn-menu {
  padding: 8px 8px;
}

.btn-brand {
  font-size: 30px;
  margin-top: 17px;
  margin-left: 165px;
}
//Search Bar
.search-bar {
  margin-left: 20px;
  border-color: #ffffff;
}
.search {
  width: 100%;
  display: flex;
  border: 0;
}
.text-term {
  font-size: 11.7px;
  font-family: "open sans", Arial, sans-serif;
  font-style: italic;
  background-color: $background-gray-300;
  padding: 0px 60px;
  margin-top: 1px;
  border: none;
  padding-left: 7px !important;
  input.placeholder {
    text-align: center;
  }
  &:focus {
    border: none;
    outline: none;
  }
}
.icon-search {
  border: none;
  padding: 6px 8px;
  cursor: pointer;
}
</style>
