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
              <vote-container direction="row" :currentValue="vote" />
            </div>
            <div class="link-item row reply-link">
              <svg
                height="16px"
                id="svg1"
                style="enable-background: new 0 0 16 16"
                viewBox="0 0 16 16"
                width="16px"
              >
                <path
                  d="M7,5V3c0-0.515-0.435-1-1-1C5.484,2,5.258,2.344,5,2.586L0.578,7C0.227,7.359,0,7.547,0,8s0.227,0.641,0.578,1L5,13.414  C5.258,13.656,5.484,14,6,14c0.565,0,1-0.485,1-1v-2h2c1.9,0.075,4.368,0.524,5,2.227C14.203,13.773,14.625,14,15,14  c0.563,0,1-0.438,1-1C16,7.083,12.084,5,7,5z"
                />
              </svg>
              <p>Reply</p>
            </div>
          </div>
          <svg
            id="svg2"
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
    vote: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-container {
  @include flex(column, center, safe);
  background-color: $main-background;
  max-width: 820px;
  width: 100%;
  padding: 30px;
  border-bottom: 2px solid $background-gray-300;
  border-left: 1px solid $background-gray-400;
  border-right: 1px solid $background-gray-400;
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

#svg1 {
  transform: scale(0.75);
  margin-right: 12px;
  margin-top: -2px;
  fill: $text-gray-500;
}

.reply-link:hover {
  color: $blue;
  & #svg1 {
    fill: $blue;
  }
}

@media only screen and (max-width: 600px) {
  .bottom-row {
    justify-content: left;
  }
  #svg2 {
    margin-left: 16px;
  }
}
</style>
