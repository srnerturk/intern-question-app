<template>
  <btnbase @click="click" class="btn" :class="[color, size, fontfamily]">
    <slot />
  </btnbase>
</template>
<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    },
  },
  props: {
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    fontfamily: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.btn {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 2px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  transition-duration: 0.5s;

  &.backwhite {
    background-color: $main-background;
  }
  &.backblue {
    background-color: $blue;
  }
  &.backblack {
    background-color: $primary-color;
  }
  &.fontblack {
    color: $primary-color;
  }
  &.fontwhite {
    color: $main-background;
  }
  &.fontgrey {
    color: $text-gray-100;
  }
  &.fontblue {
    color: $blue;
  }

  &.btn:hover {
    &.hoverbackblack {
      background-color: $primary-color;
    }
    &.hoverbackblue {
      background-color: $blue;
    }
    &.hoverbackred {
      background-color: $red-300;
    }
    &.hoverbackgray {
      background-color: $text-gray-300;
    }
    &.hoverfontwhite {
      color: $main-background;
    }
  }
  &.medium {
    padding: 9px 12px;
  }

  &.arial {
    font-family: $arial;
  }
  &.timeNew {
    font-family: $timesNewRoman;
  }
  &.roboto {
    font-family: roboto, Arial, sans-serif;
  }
}
</style>
