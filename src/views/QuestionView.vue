<template>
  <div>
    <div class="column main">
      <question-articles />
      <div class="answer-btn-container">
        <button-base
          class="answer-btn"
          :color="['backblue', 'fontwhite', 'hoverbackgray']"
          :fontfamily="'roboto'"
          @click="addAnswer"
        >
          Leave an Answer
        </button-base>
      </div>
      <answer-list-container :answers="data" />
    </div>
  </div>
</template>

<script>
import QuestionArticles from "@/components/QuestionArticles.vue";
import AnswerListContainer from "../components/AnswerListContainer.vue";
import ButtonBase from "@/components/buttonBase.vue";
export default {
  name: "QuestionView",
  components: { QuestionArticles, AnswerListContainer, ButtonBase },
  data: () => ({
    data: [
      {
        username: "Hakki Akut",
        vote: 10,
        updateTime: "April 19, 2018 at 2:03 am",
        epoch: 1524006185,
        answerText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident nam dolorum vero, blanditiis dolore fugit eos aliquam enim et nostrum praesentium perferendis similique deserunt tenetur. Eligendi ullam officia laudantium facilis alias dolorum debitis quia distinctio, amet consequatur asperiores aliquid, quidem dignissimos accusantium accusamus repellat assumenda nostrum delectus.",
      },
      {
        username: "Hakki Akut",
        vote: 12,
        updateTime: "July 28, 2022 at 2:42 pm",
        epoch: 1659008530,
        answerText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident nam dolorum vero, blanditiis dolore fugit eos aliquam enim et nostrum praesentium perferendis similique deserunt tenetur. Eligendi ullam officia laudantium facilis alias dolorum debitis quia distinctio, amet consequatur asperiores aliquid, quidem dignissimos accusantium accusamus repellat assumenda nostrum delectus. Doloremque nobis exercitationem error repudiandae! Saepe sint placeat quisquam nobis est magnam magni doloremque quia voluptatum nesciunt accusamus quaerat optio reiciendis eos voluptatibus exercitationem dolorum praesentium, dolor voluptas iste aliquam, earum, totam nisi sapiente. Beatae veritatis, voluptatum nesciunt eligendi pariatur consequuntur quae porro assumenda vero reprehenderit, in optio enim dolores. Iusto, eius!",
      },
    ],
  }),
  methods: {
    addAnswer: function () {
      // TO DO: pop up answer container
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-btn-container {
  padding: 20px;
  max-width: 820px;
  width: auto;
  background-color: $main-background;
  border-right: 1px solid $background-gray-400;
  border-left: 1px solid $background-gray-400;
  & .answer-btn {
    padding: 12px 334px;
  }
}
.main {
  max-width: 1170px;
}
</style>
