<template>
  <div>
    <img class="circular-img" :class="size" :src="url" alt="user image" />
  </div>
</template>

<script>
export default {
  name: "CircleUserAvatar",
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
</style>
