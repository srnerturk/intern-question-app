<template>
  <div>
    <master-view>
      <div class="column main">
        <ask-box />
        <home-categories />
        <question-articles />
      </div>
    </master-view>
  </div>
</template>
<script>
import MasterView from "@/components/MasterView.vue";
import AskBox from "@/components/AskBox.vue";
import HomeCategories from "@/components/HomeCategories.vue";
import QuestionArticles from "@/components/QuestionArticles.vue";
export default {
  components: { MasterView, AskBox, HomeCategories, QuestionArticles },
  name: "HomeView",
};
</script>
<style lang="scss">
.main {
  max-width: 820px;
}
</style>
