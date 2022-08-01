<template>
  <div v-bind:class="size == 'small' ? 'tooltip' : ''">
    <img class="circular-img" :class="size" :src="url" alt="user image" />
    <div v-if="size == 'small'" class="tooltip-item">
      <user-info-popup />
    </div>
  </div>
</template>

<script>
import UserInfoPopup from "./UserInfoPopup.vue";
export default {
  name: "CircleUserAvatar",
  components: {
    UserInfoPopup,
  },
  data: () => ({
    hover: false,
  }),
  props: {
    url: {
      type: String,
      default: "https://kstu.edu.tr/kstu-file/uploads/default-user-image.png",
    },
    size: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.size);
  },
};
</script>

<style lang="scss" scoped>
.circular-img {
  object-fit: cover;
  border-radius: 50%;
  background-color: $main-background;
  border: 2px solid $blue;
  padding: 4px;

  &.small {
    width: 46px;
    height: 46px;
  }
  &.medium {
    width: 74px;
    height: 74px;
  }
  &.large {
    width: 88px;
    height: 88px;
  }
  &:hover {
    border-color: $primary-color;
  }
}

.tooltip {
  position: relative;
  .tooltip-item {
    visibility: hidden;
  }
  &:hover .tooltip-item {
    visibility: visible;
  }
}
</style>
