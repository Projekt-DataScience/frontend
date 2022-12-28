<template>
  <div v-if="dataReady">
    <AppPopup v-if="visibleCreateQuestion">
      <div class="p-7 border-b-2 border-gray-200">
        <div class="text-md font-semibold">Frage erstellen</div>
      </div>
      <div class="p-7 border-b-2 border-gray-200">
        <div class="grid grid-cols-3 gap-6">
          <div>
            <AppInputDropdown
              headline="Layer"
              name="description"
              :options="createQuestionLayer"
              initialOption="Layer wählen..."
              :currentValue="createQuestionCurrentLayer"
              v-on:input="setCreateQuestionLayerByDropdown($event)"
            ></AppInputDropdown>
          </div>
          <div>
            <AppInputDropdown
              headline="Gruppe"
              name="description"
              :options="createQuestionGroup"
              initialOption="Gruppe wählen..."
              :currentValue="createQuestionCurrentGroup"
              v-on:input="setCreateQuestionGroupByDropdown($event)"
            ></AppInputDropdown>
          </div>
          <div>
            <AppInputDropdown
              headline="Kategorie"
              name="description"
              :options="createQuestionCategory"
              initialOption="Kategorie wählen..."
              :currentValue="createQuestionCurrentCategory"
              v-on:input="setCreateQuestionCategoryByDropdown($event)"
            ></AppInputDropdown>
          </div>
        </div>
        <div class="pt-6">
          <AppInputTextField
            headline="Titel"
            id="title"
            name="title"
            label="title"
            autocomplete="text"
            type="text"
            :text="createQuestionCurrentTitle"
            v-on:input="setCreateQuestionTitle($event)"
          ></AppInputTextField>
        </div>
        <div class="pt-6">
          <AppInputBigTextField
            headline="Beschreibung"
            name="comment"
            :text="createQuestionCurrentDescription"
            v-on:input="setCreateQuestionDescription($event)"
          ></AppInputBigTextField>
        </div>
      </div>
      <div class="p-7 flex items-center">
        <AppButtonPrimary
          name="Frage erstellen"
          v-bind:isActive="getCreateQuestionIsActive()"
          v-on:buttonClick="createNewQuestion()"
        ></AppButtonPrimary>
        <AppButtonSecondary
          class="ml-5"
          name="Abbrechen"
          v-on:buttonClick="closePopupCreateQuestion()"
        ></AppButtonSecondary>
      </div>
    </AppPopup>
    <AppPageLayout>
      <template #sidebar>
        <!-- content for the sidebar slot -->
        <LPASidebar currentPage="LPAQuestions"></LPASidebar>
      </template>
      <template #header>
        <AppSearchAndFilterBar>
          <template #wrapperRight>
            <AppButtonPrimary
              class="mr-6"
              name="Frage erstellen"
              v-bind:isActive="true"
              v-on:buttonClick="openPopupCreateQuestion($event)"
            >
              <template #icon>
                <AppIconLibrary
                  icon="plus"
                  styling="mr-2 pr-0.5 py-0.5"
                ></AppIconLibrary>
              </template>
            </AppButtonPrimary>
          </template>
        </AppSearchAndFilterBar>
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
                :text="item.question"
                :subtext="[
                  {
                    text: item.layer.layer_name,
                  },
                  {
                    text: item.group.group_name,
                  },
                ]"
              ></AppListTextAndSubtext>
            </template>
            <template #wrapperRight>
              <!-- <LPAHistoryBar :answers="answers[index]"></LPAHistoryBar> -->

              <!-- Die Component sollte eig hier sein, aber aus Zeitgründen wird die HistoryBar verwendet
               
            -->
              <LPAQuestionBar
                :green="item.answers.green.length"
                :yellow="item.answers.yellow.length"
                :red="item.answers.red.length"
              ></LPAQuestionBar>
              <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
            </template>
          </AppListContainer>
        </div>
      </template>
    </AppPageLayout>
  </div>
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
import AppButtonPrimary from "../../../components/AppButtonPrimary.vue";
import AppButtonSecondary from "../../../components/AppButtonSecondary.vue";
import AppButtonTertiary from "../../../components/AppButtonTertiary.vue";
import AppInputDropdown from "../../../components/AppInputDropdown.vue";
import AppPopup from "../../../components/AppPopup.vue";

import { useQuestions } from "../store/questions";
import { useAnswers } from "../store/answers";
import { Question } from "../interfaces/question";
import { Answer } from "../interfaces/answer";
import { QuestionAndAnswers } from "../interfaces/questionAndAnswers";
import { AnswerReason } from "../interfaces/answerReason";
import { useUser } from "../../../store/user";
import AppInputTextField from "../../../components/AppInputTextField.vue";
import AppInputBigTextField from "../../../components/AppInputBigTextField.vue";

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
    AppButtonPrimary,
    AppInputDropdown,
    AppPopup,
    AppButtonSecondary,
    AppButtonTertiary,
    AppInputTextField,
    AppInputBigTextField,
  },
  async mounted() {
    this.enableScroll();
    const questionStore = useQuestions();
    await questionStore.fetchQuestions();
    await questionStore.fetchAnswersPerQuestion();
    this.questions = questionStore.questionsAndAnswers;

    //fetch Layers from User Store for create question dropdown
    const userStore = useUser();
    await userStore.fetchLayers();

    for (let i = 0; i < userStore.layers.length; i++) {
      this.createQuestionLayer.push({
        id: userStore.layers[i].id,
        description: userStore.layers[i].layer_number.toString(),
      });
    }

    //fetch Groups from User Store for create question dropdown
    await userStore.fetchGroups();

    for (let i = 0; i < userStore.groups.length; i++) {
      this.createQuestionGroup.push({
        id: userStore.groups[i].id,
        description: userStore.groups[i].group_name,
      });
    }

    //fetch Categorys from Question Store for create question dropdown
    await questionStore.fetchCategorys();

    for (let i = 0; i < questionStore.categorys.length; i++) {
      this.createQuestionCategory.push({
        id: questionStore.categorys[i].id,
        description: questionStore.categorys[i].category_name,
      });
    }

    // render page
    this.dataReady = true;
  },
  data() {
    return {
      dataReady: false,
      questions: [] as QuestionAndAnswers[],
      answers: [] as Answer[],
      visibleCreateQuestion: false,
      createQuestionLayer: [] as AnswerReason[],
      createQuestionCurrentLayer: "",
      createQuestionGroup: [] as AnswerReason[],
      createQuestionCurrentGroup: "",
      createQuestionCategory: [] as AnswerReason[],
      createQuestionCurrentCategory: "",
      createQuestionCurrentDescription: "",
      createQuestionCurrentTitle: "",
    };
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
      return "Layer " + layer;
    },
    getLastAnswers(id: number) {},
    openPopupCreateQuestion(event: any) {
      this.disableScroll();
      this.visibleCreateQuestion = true;
    },
    disableScroll() {
      // Get the current page scroll position
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    },
    enableScroll() {
      window.onscroll = function () {};
    },
    closePopupCreateQuestion() {
      this.visibleCreateQuestion = false;
      this.enableScroll();
    },
    setCreateQuestionLayerByDropdown(event: any) {
      this.createQuestionCurrentLayer = event;
    },
    setCreateQuestionGroupByDropdown(event: any) {
      this.createQuestionCurrentGroup = event;
    },
    setCreateQuestionCategoryByDropdown(event: any) {
      this.createQuestionCurrentCategory = event;
    },
    setCreateQuestionDescription(event: any) {
      this.createQuestionCurrentDescription = event;
    },
    setCreateQuestionTitle(event: any) {
      this.createQuestionCurrentTitle = event;
    },
    getCreateQuestionIsActive() {
      if (
        this.createQuestionCurrentLayer !== "" &&
        this.createQuestionCurrentGroup !== "" &&
        this.createQuestionCurrentDescription !== "" &&
        this.createQuestionCurrentTitle !== "" &&
        this.createQuestionCurrentCategory !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    async createNewQuestion() {
      const questionStore = useQuestions();
      await questionStore.createQuestion(
        parseInt(this.createQuestionCurrentLayer),
        parseInt(this.createQuestionCurrentGroup),
        parseInt(this.createQuestionCurrentCategory),
        this.createQuestionCurrentTitle,
        this.createQuestionCurrentDescription
      );
      this.closePopupCreateQuestion();
    },
  },
});
</script>