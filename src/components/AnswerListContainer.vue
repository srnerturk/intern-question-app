<template>
  <div class="column">
    <div class="answers-tabbar row">
      <p class="answer-num">2 Answers</p>
      <div class="tabs row">
        <div
          v-for="tab in tabs"
          :key="tab"
          v-bind:class="currentTab == tab ? 'chosen tab-item' : 'tab-item'"
          v-on:click="changeTab(tab)"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <answer-container
      v-for="answer in answerList()"
      :key="answer.epoch"
      :username="answer.username"
      :updateTime="answer.updateTime"
      :vote="answer.vote"
      :answerText="answer.answerText"
    />
  </div>
</template>

<script>
import AnswerContainer from "./AnswerContainer.vue";
export default {
  name: "AnswerListContainer",
  components: {
    AnswerContainer,
  },
  data: () => ({
    currentTab: "Voted",
    tabs: ["Voted", "Oldest", "Recent"],
  }),
  methods: {
    changeTab: function (value) {
      this.currentTab = value;
    },
    answerList: function () {
      let list1 = [];
      this.answers.forEach((element) => {
        list1.push(element);
      });

      if (this.currentTab == "Voted") {
        return list1.sort((a, b) => b.vote - a.vote);
      } else if (this.currentTab == "Oldest") {
        return list1.sort((a, b) => a.epoch - b.epoch);
      } else {
        return list1.sort((a, b) => b.epoch - a.epoch);
      }
    },
  },
  props: {
    answers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.answers-tabbar {
  background-color: $background-gray-100;
  width: 100%;
  max-width: 820px;
  justify-content: space-between;
  padding: 30px 30px 0;
  border: 1px solid $background-gray-400;
  & .answer-num {
    @include font($roboto, $text-gray-700, 14px, 700);
  }
  & .tab-item {
    @include font($roboto, $text-gray-100, 13px);
    border: 1px solid $background-gray-400;
    padding: 10px;
    &:hover {
      color: $blue;
    }
  }
  & .chosen {
    background-color: $main-background !important;
    color: $text-gray-600 !important;
    border-bottom: 1px solid $main-background;
    &:hover {
      color: $blue;
    }
  }
}
</style>
