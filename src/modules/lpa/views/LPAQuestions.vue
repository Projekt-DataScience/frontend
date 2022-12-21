<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAQuestions"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
    <template #content>
      <div v-for="(item, index) in questions" :key="index">
        <AppListContainer :isLast="getStatus(item, questions)">
          <template #wrapperLeft>
            <div class="mr-4">
              <AppIconLibrary icon="checkbox" type="active" styling="h-5 w-full text-gray-400"></AppIconLibrary>
            </div>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext :text="item.question" :subtext="[
              {
                text: item.layer.layer_name
              },
              {
                text: item.group.group_name
              }
            ]"></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>

            <!-- <LPAHistoryBar :answers="answers[index]"></LPAHistoryBar> -->

            <!-- Die Component sollte eig hier sein, aber aus Zeitgründen wird die HistoryBar verwendet
              <LPAQuestionBar :green="22" :orange="22" :red="22"></LPAQuestionBar> 
            -->
            <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
          </template>
        </AppListContainer>
      </div>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import LPAQuestionBar from "../components/LPAQuestionBar.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";

import { useQuestions } from "../store/questions";
import { useAnswers } from "../store/answers";
import { Question } from "../interfaces/question";
import { Answer } from "../interfaces/answer";

export default defineComponent({
  name: "LPAQuestions",
  components: {
    LPASidebar,
    AppPageLayout,
    AppSearchAndFilterBar,
    AppListContainer,
    AppButtonOption,
    LPAQuestionBar,
    AppListTextAndSubtext,
    AppIconLibrary,
  },
  async mounted() {
    const questionStore = useQuestions();
    await questionStore.fetchQuestions();
    this.questions = questionStore.questions;

    // const answerStore = useAnswers();
    // await answerStore.fetchAnswers(this.questions, 10);
    // this.answers = answerStore.answers;
    
  },
  data() {
    return {
      questions: [] as Question[],
      answers: [] as Answer[]
    }
  },
  methods: {
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true;
      } else {
        return false;
      }
    },
    layerToString(layer: number) {
      return "Layer " + layer
    },
    getLastAnswers(id: number) {

    }
  },
});
</script>