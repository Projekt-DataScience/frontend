<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAHistory"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
    <template #content>
      <div v-for="item in audits" :key="item.id">
        <AppListContainer :isLast="getIsLast(item, audits)">
          <template #wrapperLeft>
            <AppIconLibrary icon="lpaStatus" :type="getAuditStatus(item)" styling="h-10"></AppIconLibrary>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext :text="getAuditText(item)" :subtext="[
              {
                text: item.assigned_layer
              },
              {
                text: item.assigned_group
              },
              {
                text: getAnzahlFragenString(item.questions)
              },
              {
                text: seconds2time(item.duration)
              }
            ]"></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            <LPAHistoryBar :answers="item.answers"></LPAHistoryBar>
            <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
          </template>
        </AppListContainer>
      </div>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import LPAHistoryBar from "../components/LPAHistoryBar.vue";
import { getIsLast } from "../../../mixins/arrayMixin";
import { Audits, useAudits } from "../store/audits";
import { Questions } from "../store/questions";
import { Answers } from "../store/answers";
import { Users } from "../../../store/users";

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppButtonOption,
    AppListContainer,
    AppListTextAndSubtext,
    AppIconLibrary,
    LPAHistoryBar
  },

  mixins: [getIsLast],

  async mounted() {
    const store = useAudits();
    await store.fetchAudits();
    this.audits = store.audits;
  },
  data() {
    return {
      audits: [] as Audits[]
    }
  },
  methods: {
    getAuditStatus(audit: Audits) {
      var status = "";
      for (let i = 0; i < audit.answers.length; i++) {
        if (audit.answers[i].answer === "red") {
          return "red";
        }
        else if (audit.answers[i].answer === "yellow") {
          status = "yellow";
        }
        else {
          status = "green";
        }
      }
      return status;
    },
    getAuditText(audit: Audits) {
      var text = "";
      if (audit.recurrent_audit) {
        text.concat("Geplanter Audit ");
      }
      else {
        text.concat("Spontaner Audit ");
      }
      text.concat("vom " + new Date(audit.due_date).toLocaleDateString('de-DE', { year: 'numeric', month: 'short', day: 'numeric' }));
      text.concat("von " + audit.auditor.first_name + " " + audit.auditor.last_name);
      return text;
    },
    getAnzahlFragenString(questions: Questions[]){
      return "" + questions.length + " Fragen"
    },
    seconds2time(seconds: number) {
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - (hours * 3600)) / 60);
      var seconds = seconds - (hours * 3600) - (minutes * 60);
      var time = "";

      if (hours != 0) {
        time = hours + ":";
      }
      if (minutes != 0 || time !== "") {
        var min = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
        time += min + ":";
      }
      if (time === "") {
        time = seconds + "s";
      }
      else {
        time += (seconds < 10) ? "0" + seconds : String(seconds);
      }
      return time;

    },
  }
}
);
</script>