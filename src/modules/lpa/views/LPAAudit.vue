<template>
  <div v-if="dataReady">
    <AppPopup v-if="visibleTest">
      <div class="p-7 border-b-2 border-gray-200 flex items-center">
        <div>
          <div>{{ questions[currentQuestionIndex].question }}</div>
          <div class="text-gray-400">
            {{ questions[currentQuestionIndex].category.category_name }}
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
        <AppInputDropdown
          headline="Abweichungsgrund"
          name="description"
          :options="options"
          initialOption="-- Grund auswählen --"
          :currentValue="currentAnswer.description"
          v-on:input="setReasonByDropdown($event)"
        ></AppInputDropdown>
        <div class="pt-6">
          <AppInputBigTextField
            headline="Beschreibung der Abweichung"
            name="comment"
            :text="currentAnswer.comment"
            v-on:input="setLongTextComment($event)"
          ></AppInputBigTextField>
        </div>
      </div>
      <div class="p-7 flex items-center">
        <AppButtonPrimary
          name="Speichern"
          v-bind:isActive="getSaveButtonStatus()"
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
                v-bind:isActive="getFinishButtonStatus()"
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
        <div class="flex items-center m-6">
          <!--Auditor-->
          <AppListTextWithDividerLine
            :text="
              concateStrings(audit.auditor.first_name, audit.auditor.last_name)
            "
            subtext="Auditor"
            :imgPath="audit.auditor.profile_picture_url"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Befragter-->
          <AppListTextWithDividerLine
            :text="
              concateStrings(audited_user.first_name, audited_user.last_name)
            "
            subtext="Befragter"
            :imgPath="audited_user.profile_picture_url"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Layer-->
          <AppListTextWithDividerLine
            :text="
              concateStrings(
                'Layer',
                audit.assigned_layer.layer_number.toString()
              )
            "
            subtext="Layer"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Gruppe-->
          <AppListTextWithDividerLine
            :text="audit.assigned_group.group_name"
            subtext="Gruppe"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Fälligkeit-->
          <AppListTextWithDividerLine
            :text="getDate(audit.due_date)"
            subtext="Fälligkeit"
            v-bind:isLast="true"
          ></AppListTextWithDividerLine>
        </div>
      </template>
      <template #content>
        <div v-for="(items, index) in audit.questions" :key="index">
          <AppListContainer :isLast="getIsLast(items, audit.questions)">
            <template #wrapperLeft>
              <AppIconLibrary
                icon="lpaStatus"
                :type="getQuestionStatus(items.id, audit)"
                styling="h-10"
              ></AppIconLibrary>
            </template>
            <template #wrapperContent>
              <AppListTextAndSubtext
                :text="items.question"
                :subtext="[
                  {
                    text: items.category.category_name,
                  },
                ]"
              ></AppListTextAndSubtext>
            </template>
            <template #wrapperRight>
              <AppButtonTertiary
                v-if="getQuestionStatus(items.id, audit) === 'gray'"
                name="Beantworten"
                :id="index"
                v-on:buttonClick="openPopup($event)"
                class="ml-4"
              ></AppButtonTertiary>
              <div class="text-black" v-else>
                <AppButtonTertiary
                  v-bind:isActive="false"
                  name="Ändern"
                  :id="index"
                  v-on:buttonClick="openPopup($event)"
                  class="ml-4"
                ></AppButtonTertiary>
              </div>
            </template>
          </AppListContainer>
        </div>
      </template>
    </AppPageLayout>
  </div>
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
import AppInputDropdown from "../../../components/AppInputDropdown.vue";

import { useAudit } from "../store/audit";
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import { Question } from "../interfaces/question";
import { AnswerReason } from "../interfaces/answerReason";
import { Answer } from "../interfaces/answer";

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
    AppInputDropdown,
  },
  async mounted() {
    const store = useAudit();
    await store.fetchAudit();
    await store.fetchReasons();
    await store.fetchUser();
    this.audit = store.audit;
    this.options = store.reasons;
    this.audited_user = store.audited_user;
    this.setQuestions(this.audit);
    this.dataReady = true;

    this.resetCurrentAnswer();
  },
  mixins: [getIsLast],
  data() {
    return {
      audit: {} as Audit,
      audited_user: {} as User,
      visibleTest: false,
      questions: [] as Question[],
      currentQuestionIndex: 0,
      dataReady: false,
      test: "Initial",
      options: [] as AnswerReason[],
      selectedOption: "null",
      currentAnswer: {} as Answer,
    };
  },
  methods: {
    testMeth(currentAnswer: any) {
      if (currentAnswer.answer === "red") {
        return "red";
      } else if (currentAnswer.answer === "yellow") {
        return "yellow";
      } else if (currentAnswer.answer === "green") {
        return "green";
      }
    },
    getQuestionStatus(questionID: any, audit: Audit) {
      if (audit.answers.length !== 0) {
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
      }
      return "gray";
    },
    concateStrings(...args: string[]) {
      var tmp = "";
      for (var i = 0; i < args.length; i++) {
        tmp = tmp + args[i] + " ";
      }
      return tmp;
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
      this.resetCurrentAnswer();
      if (this.audit.answers.length !== 0) {
        for (let i = 0; i < this.audit.answers.length; i++) {
          if (this.audit.answers[i].question_id === this.audit.questions[this.currentQuestionIndex].id) {
            this.currentAnswer = this.audit.answers[i]
          }
        }
      }
    },
    closePopup() {
      this.visibleTest = false;
      this.enableScroll();
      this.resetCurrentAnswer();
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
      this.currentAnswer.question_id = this.audit.questions[this.currentQuestionIndex].id;
    },
    getNewQuestion() {
      this.resetCurrentAnswer();
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
          this.getQuestionStatus(this.questions[tmpIndex].id, this.audit) ==
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
      console.log(this.currentAnswer);
      const store = useAudit();
      if (this.currentAnswer.answer === "red") {
        store.updateAnswersByID(
          this.currentAnswer.question_id,
          this.currentAnswer.answer,
          this.currentAnswer.description,
          this.currentAnswer.comment
        );
      } else {
        store.updateAnswersByID(
          this.questions[this.currentQuestionIndex].id,
          this.currentAnswer.answer,
          "",
          ""
        );
      }
      this.audit = store.audit;
      if (this.getNewQuestion() == "none") {
        this.closePopup();
      }
      this.resetCurrentAnswer();
    },
    getBorderStatus(emojyType: String) {
      if (
        this.getQuestionStatus(
          this.questions[this.currentQuestionIndex].id,
          this.audit
        ) == emojyType ||
        this.testMeth(this.currentAnswer) == emojyType
      ) {
        return "border-2 border-gray-400 rounded-md bg-gray-200";
      }
      return null;
    },
    updateAnswers(emojyType: string) {
      this.currentAnswer.answer = emojyType;
    },
    statusIsRed() {
      if (
        this.testMeth(this.currentAnswer) == "red"
      ) {
        return true;
      } else {
        return false;
      }
    },
    getFinishButtonStatus() {
      for (let i = 0; i < this.audit.questions.length; i++) {
        if (
          this.getQuestionStatus(this.audit.questions[i].id, this.audit) ===
          "gray"
        ) {
          return false;
        }
      }
      return true;
    },
    getSaveButtonStatus() {
      if (Object.keys(this.currentAnswer).length !== 0) {
        if (
          this.currentAnswer.answer === "green" ||
          this.currentAnswer.answer === "yellow"
        ) {
          return true;
        } else if (
          this.currentAnswer.answer === "red" &&
          this.currentAnswer.description !== "" &&
          this.currentAnswer.comment !== ""
        ) {
          return true;
        }
      }
      return false;
    },
    setReasonByDropdown(event: any) {
      this.currentAnswer.description = event;
    },
    setLongTextComment(event: any) {
      this.currentAnswer.comment = event;
    },
    resetCurrentAnswer() {
      this.currentAnswer = {
        id: 0,
        audit_id: this.audit.id,
        question_id: this.audit.questions[this.currentQuestionIndex].id,
        answer: "gray",
        comment: "",
        description: "",
        assigned_layer: this.audit.assigned_layer,
        assigned_group: this.audit.assigned_group,
      };
    },
  },
});
</script>