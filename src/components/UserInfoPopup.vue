<template>
  <div class="user-info">
    <div class="column">
      <div class="avatar"><circle-user-avatar size="medium" /></div>

      <router-link to="#" class="username">{{ user.name }}</router-link>
      <p class="position">{{ user.position }}</p>
      <div class="contribution column">
        <router-link class="contribution-link" to="#"
          >{{ user.contribution.questions }} Questions</router-link
        >
        <router-link class="contribution-link" to="#"
          >{{ user.contribution.answers }} Answers</router-link
        >
        <router-link class="contribution-link" to="#"
          >{{ user.contribution.bestAnswers }} Best Answers</router-link
        >
        <router-link class="contribution-link" to="#"
          >{{ user.contribution.points }} Points</router-link
        >
      </div>
      <button-base
        class="view-btn"
        :color="['backblue', 'fontwhite', 'hoverbackred']"
        :fontfamily="'roboto'"
        @click="routerPush"
      >
        View Profile
      </button-base>
    </div>
  </div>
</template>

<script>
import ButtonBase from "./buttonBase.vue";
export default {
  name: "UserInfoPopup",
  components: {
    CircleUserAvatar: () => import("./CircleUserAvatar.vue"),
    ButtonBase,
  },
  data: () => ({
    user: {
      name: "Hakki Akut",
      position: "Frontend  Intern",
      contribution: {
        questions: 1,
        answers: 10,
        bestAnswers: 3,
        points: 250,
      },
    },
  }),
  methods: {
    routerPush: function () {
      // TO DO: push to user page
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  content: "";
  width: 260px;
  background: $main-background;
  border: 1px solid $background-gray-300;
  border-radius: 2px;
  position: absolute;
  padding: 20px 0;
  z-index: 9999;
  text-align: center;
  @include flex(column, center, center);
  & .username {
    margin: 10px 0 6px 0;
    text-decoration: none;
    @include font($roboto, $blue, 15px, 700);
    &:hover {
      color: $primary-color;
    }
  }
  p {
    &.position {
      @include font($arial, $text-gray-400, 13px);
      margin-bottom: 20px;
    }
  }
}

.contribution {
  background-color: $background-gray-300;
  text-align: left;
  width: 200px;
  padding: 12px;
  & > .contribution-link {
    @include font($roboto, $text-gray-400, 13px);
    text-decoration: none;
    margin: 6px 0;
    &:hover {
      color: $blue;
    }
  }
}
.avatar {
  margin-left: auto;
  margin-right: auto;
}
.view-btn {
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
