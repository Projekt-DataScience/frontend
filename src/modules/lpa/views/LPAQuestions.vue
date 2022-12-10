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
              <AppIconLibrary
                icon="checkbox"
                type="active"
                styling="h-5 w-full text-gray-400"
              ></AppIconLibrary>
            </div>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext
              :text="item.title"
              :subtext="item.listItems"
            ></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            <LPAQuestionBar :green="22" :orange="22" :red="22"></LPAQuestionBar>
            <AppButtonOption
              v-bind:isVertical="false"
            ></AppButtonOption>
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
import { Questions, StructuredQuestions } from "../types";

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
    const store = useQuestions();
    await store.fetchQuestions();
    this.questions = store.getQuestions;
  },
  data(){
    return{
      questions: [] as StructuredQuestions[]
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
    fetchQuestions() {
      const store = useQuestions();
      console.log(store.questions);
      return {
        questions: store.questions,
      };
    },
  },
});
</script>