<template>
  <div>
    <div class="home-view">
      <ask-box />
      <home-categories />
      <question-articles />
    </div>
  </div>
</template>
<script>
import AskBox from "@/components/AskBox.vue";
import HomeCategories from "@/components/HomeCategories.vue";
import QuestionArticles from "@/components/QuestionArticles.vue";
export default {
  name: "HomeView",
  components: {
    AskBox,
    HomeCategories,
    QuestionArticles,
  },
};
</script>
