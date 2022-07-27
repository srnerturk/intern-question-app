<template>
  <div class="answer-container">
    <div class="row">
      <circle-user-avatar size="small" />
      <div class="column">
        <div class="answer-meta column">
          <p class="username">{{ username }}</p>
          <p class="update-time">Answered on {{ updateTime }}</p>
        </div>
        <p class="answer-text">
          {{ answerText }}
        </p>
        <div class="row bottom-row">
          <div class="bottom-links row">
            <div class="link-item">
              <vote-container direction="row" currentValue="10" />
            </div>
            <p class="link-item">reply</p>
            <p class="link-item">share</p>
          </div>
          <svg
            enable-background="new 0 0 12 12"
            height="12px"
            viewBox="0 0 12 12"
            width="12px"
          >
            <circle cx="2" cy="6" r="1" />
            <circle cx="6" cy="6" r="1" />
            <circle cx="10" cy="6" r="1" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleUserAvatar from "./CircleUserAvatar.vue";
import VoteContainer from "./VoteContainer.vue";
export default {
  name: "AnswerContainer",
  components: {
    CircleUserAvatar,
    VoteContainer,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    updateTime: {
      type: String,
      required: true,
    },
    answerText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.answer-container {
  @include flex(column, center, safe);
  background-color: $main-background;
  width: 819px;
  padding: 30px;
}

p {
  &.username {
    @include font($roboto, $blue, 14px);
    margin: 3px 0 8px 0;
    &:hover {
      color: $primary-color;
    }
  }
  &.update-time {
    @include font($arial, $text-gray-100, 11px);
  }
  &.answer-text {
    @include font($arial, $text-gray-700, 15px);
    padding: 0 0 0 20px;
    margin: 0 0 20px;
    line-height: 30px;
  }
}
.answer-meta {
  margin: 0 0 15px;
  padding: 0 0 0 20px;
}
.bottom-row {
  justify-content: space-between;
  & .bottom-links {
    padding: 0 0 0 5px;
    @include font($arial, $text-gray-500, 12px);
    & .link-item {
      padding: 0 15px;
      border-right: 1px solid $background-gray-400;
    }
  }
}
svg circle {
  fill: $text-gray-500;
}
</style>
