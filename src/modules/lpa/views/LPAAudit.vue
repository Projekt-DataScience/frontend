<template>
  <AppPopup v-if="visibleTest">
    <div class="p-7 border-b-2 border-gray-200 flex items-center">
      <div>
        <div>{{ questions[currentQuestionIndex].title }}</div>
        <div class="text-gray-400">
          {{ questions[currentQuestionIndex].category }}
        </div>
      </div>
      <div class="flex-auto">
        <AppButtonSecondary
          class="ml-5 flex justify-end"
          name="Schließen"
          v-on:buttonClick="closePopup()"
        ></AppButtonSecondary>
      </div>
    </div>
    <div class="p-7 border-b-2 border-gray-200">
      <button
        class="flex items-center py-4 pr-4 w-full"
        :class="getBorderStatus('green')"
        @click="updateAnswers('green')"
      >
        <AppIconLibrary
          icon="lpaStatus"
          type="green"
          styling="h-10"
        ></AppIconLibrary>
        <div>Alles in Ordnung</div>
      </button>
      <button
        class="flex items-center py-4 pr-4 w-full"
        :class="getBorderStatus('yellow')"
        @click="updateAnswers('yellow')"
      >
        <AppIconLibrary
          icon="lpaStatus"
          type="yellow"
          styling="h-10"
        ></AppIconLibrary>
        <div>Abweichung konnte sofort behoben werden</div>
      </button>
      <button
        class="flex items-center py-4 pr-4 w-full"
        :class="getBorderStatus('red')"
        @click="updateAnswers('red')"
      >
        <AppIconLibrary
          icon="lpaStatus"
          type="red"
          styling="h-10"
        ></AppIconLibrary>
        <div>Schwerwiegendes Problem</div>
      </button>
    </div>
    <div class="p-7 border-b-2 border-gray-200" v-if="statusIsRed()">
      {{test}}
      <AppInputDropdown headline="Abweichungsgrund" name="description" :value="test" v-on:input="setTest($event)"></AppInputDropdown>
      <div class="pt-6">
        <AppInputBigTextField headline="Beschreibung der Abweichung" name="comment"></AppInputBigTextField>
      </div>
    </div>
    <div class="p-7 flex items-center">
      <AppButtonPrimary
        name="Speichern"
        v-bind:isActive="true"
        v-on:buttonClick="saveAnswer()"
      ></AppButtonPrimary>
      <div class="flex-auto">
        <AppButtonTertiary
          class="ml-5 flex justify-left"
          name="Überspringen"
          v-on:buttonClick="getNewQuestion()"
        ></AppButtonTertiary>
      </div>
    </div>
  </AppPopup>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAAudit"></LPASidebar>
    </template>
    <template #header>
      <div class="flex items-center m-6">
        <div class="font-semibold text-lg">Audit durchführen</div>
        <div class="flex-auto">
          <div class="flex justify-end">
            <AppButtonPrimary
              class="mr-6"
              name="Abschließen"
              v-bind:isActive="false"
            >
            </AppButtonPrimary>
            <AppButtonSecondary
              class="mr-8"
              name="Abbrechen"
              v-on:buttonClick="dismissAudit()"
            >
            </AppButtonSecondary>
          </div>
        </div>
      </div>
      <div
        class="flex items-center m-6"
        v-for="(item, index) in audit"
        :key="index"
      >
        <!--Auditor-->
        <AppListTextWithDividerLine
          :text="getUserText(item.auditor[0])"
          subtext="Auditor"
          :imgPath="item.auditor[0].profile_picture"
          v-bind:isLast="false"
        ></AppListTextWithDividerLine>
        <!--Befragter-->
        <AppListTextWithDividerLine
          :text="getUserText(audited_user[0])"
          subtext="Befragter"
          :imgPath="audited_user[0].profile_picture"
          v-bind:isLast="false"
        ></AppListTextWithDividerLine>
        <!--Layer-->
        <AppListTextWithDividerLine
          :text="getLayer(item.assigned_layer)"
          subtext="Layer"
          v-bind:isLast="false"
        ></AppListTextWithDividerLine>
        <!--Gruppe-->
        <AppListTextWithDividerLine
          :text="item.assigned_group"
          subtext="Gruppe"
          v-bind:isLast="false"
        ></AppListTextWithDividerLine>
        <!--Fälligkeit-->
        <AppListTextWithDividerLine
          :text="getDate(item.due_date)"
          subtext="Fälligkeit"
          v-bind:isLast="true"
        ></AppListTextWithDividerLine>
      </div>
    </template>
    <template #content>
      <div v-for="(item, index) in audit" :key="index">
        <div v-for="(items, innerIndex) in item.questions" :key="innerIndex">
          <AppListContainer :isLast="getIsLast(items, item.questions)">
            <template #wrapperLeft>
              <AppIconLibrary
                icon="lpaStatus"
                :type="getQuestionStatus(items.id, item)"
                styling="h-10"
              ></AppIconLibrary>
            </template>
            <template #wrapperContent>
              <AppListTextAndSubtext
                :text="items.title"
                :subtext="[
                  {
                    text: items.category,
                  },
                ]"
              ></AppListTextAndSubtext>
            </template>
            <template #wrapperRight>
              <AppButtonTertiary
                v-if="getQuestionStatus(items.id, item) === 'gray'"
                name="Beantworten"
                :id="innerIndex"
                v-on:buttonClick="openPopup($event)"
                class="ml-4"
              ></AppButtonTertiary>
              <div class="text-black" v-else>
                <AppButtonTertiary
                  v-bind:isActive="false"
                  name="Ändern"
                  :id="innerIndex"
                  v-on:buttonClick="openPopup($event)"
                  class="ml-4"
                ></AppButtonTertiary>
              </div>
            </template>
          </AppListContainer>
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<!--{{$route.params.id}}-->
<script lang="ts">
import { defineComponent } from "vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import LPASidebar from "../components/LPASidebar.vue";
import LPAAuditHeader from "../../../components/AppSearchAndFilterBar.vue";
import AppButtonPrimary from "../../../components/AppButtonPrimary.vue";
import AppButtonSecondary from "../../../components/AppButtonSecondary.vue";
import AppListTextWithDividerLine from "../../../components/AppListTextWithDividerLine.vue";
import { getIsLast } from "../../../mixins/arrayMixin";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";
import AppButtonTertiary from "../../../components/AppButtonTertiary.vue";
import AppPopup from "../../../components/AppPopup.vue";
import AppInputBigTextField from "../../../components/AppInputBigTextField.vue";
import AppInputDropdown from "../../../components/AppInputDropdown.vue"

import { useAudit } from "../store/audit";
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import { Question } from "../interfaces/question";

export default defineComponent({
  name: "LPAAudit",
  components: {
    AppPageLayout,
    LPAAuditHeader,
    LPASidebar,
    AppButtonPrimary,
    AppButtonSecondary,
    AppListTextWithDividerLine,
    AppListContainer,
    AppIconLibrary,
    AppListTextAndSubtext,
    AppButtonTertiary,
    AppPopup,
    AppInputBigTextField,
    AppInputDropdown
  },
  async mounted() {
    const store = useAudit();
    await store.fetchAudit();
    await store.fetchUser();
    this.audit = store.audit;
    this.audited_user = store.audited_user;
    this.setQuestions(this.audit[0]);
  },
  mixins: [getIsLast],
  data() {
    return {
      audit: [] as Audit[],
      audited_user: [] as User[],
      visibleTest: false,
      currentQuestion: [] as Question[],
      questions: [] as Question[],
      currentQuestionIndex: 0,
      test: ""
    };
  },
  methods: {
    getQuestionStatus(questionID: any, audit: Audit) {
      for (let i = 0; i < audit.answers.length; i++) {
        if (audit.answers[i].question_id === questionID) {
          if (audit.answers[i].answer === "red") {
            return "red";
          } else if (audit.answers[i].answer === "yellow") {
            return "yellow";
          } else if (audit.answers[i].answer === "green") {
            return "green";
          }
        }
      }
      return "gray";
    },
    getUserText(user: User) {
      return user.first_name + " " + user.last_name;
    },
    getDate(item: string) {
      return new Date(item).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "long",
      });
    },
    getLayer(layer: number) {
      return "Layer " + layer;
    },
    openPopup(event: any) {
      this.disableScroll();
      this.visibleTest = true;
      this.setCurrentQuestion(event);
    },
    closePopup() {
      this.visibleTest = false;
      this.enableScroll();
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
    dismissAudit() {
      //this.$router.push('/lpa/')
      this.$router.go(-1);
    },
    setQuestions(audit: Audit) {
      this.questions = audit.questions;
    },
    setCurrentQuestion(index: any) {
      this.currentQuestionIndex = index;
      console.log(this.currentQuestionIndex);
    },
    getNewQuestion() {
      let tmpIndex = this.currentQuestionIndex;
      //search the next unanswered question
      for (let i = 0; i < this.questions.length; i++) {
        //set next Index and check if currentIndex is last index
        if (tmpIndex === this.questions.length - 1) {
          tmpIndex = 0;
        } else {
          tmpIndex = tmpIndex + 1;
        }
        //check if tmpIndex Question is answered
        if (
          this.getQuestionStatus(this.questions[tmpIndex].id, this.audit[0]) ==
          "gray"
        ) {
          this.setCurrentQuestion(tmpIndex);
          return;
        }
      }
      // if all questions are answered
      return "none";
    },
    saveAnswer() {
      if (this.getNewQuestion() == "none") {
        this.closePopup();
      }
    },
    getBorderStatus(emojyType: String) {
      if (
        this.getQuestionStatus(
          this.questions[this.currentQuestionIndex].id,
          this.audit[0]
        ) == emojyType
      ) {
        return "border-2 border-gray-400 rounded-md bg-gray-200";
      }
      return null;
    },
    async updateAnswers(emojyType: string) {
      console.log("clicked");
      const store = useAudit();
      await store.updateAnswersByID(
        this.questions[this.currentQuestionIndex].id,
        emojyType
      );
      this.audit = store.audit;
    },
    statusIsRed() {
      if (
        this.getQuestionStatus(
          this.questions[this.currentQuestionIndex].id,
          this.audit[0]
        ) == "red"
      ) {
        return true;
      } else {
        return false;
      }
    },
    setTest(test:any){
      this.test = test
    }
  },
});
</script>