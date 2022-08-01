<template>
  <div :class="direction">
    <div class="arrow-up" v-on:click="increase"></div>
    <p>{{ currentValue }}</p>
    <div class="arrow-down" v-on:click="decrease"></div>
  </div>
</template>

<script>
export default {
  name: "VoteContainer",
  props: {
    direction: {
      type: String, // can be row or column
      required: true,
    },
    currentValue: {
      type: Number,
      required: true,
    },
  },
  methods: {
    increase: function () {
      // TO DO : increase the currentValue
    },
    decrease: function () {
      // TO DO : decrease the currentValue
    },
  },
};
</script>

<style lang="scss" scoped>
.row > p {
  @include font($arial, $text-gray-300, 17px, 700);
  margin: -3px 10px 0 10px;
}

.column > p {
  @include font($arial, $text-gray-300, 20px, 700);
  margin: 10px 0 10px -10px;
}

.arrow-up {
  width: 12.75px;
  height: 12.75px;
  background-color: $text-gray-300;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  &:hover {
    background-color: $primary-color;
  }
}

.arrow-down {
  width: 12.75px;
  height: 12.75px;
  background-color: $text-gray-300;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  &:hover {
    background-color: $primary-color;
  }
}
</style>
