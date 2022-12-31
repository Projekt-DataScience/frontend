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
            <AppListTextAndSubText :text="getAuditText(item)" :subtext="[
              {
                text: item.assigned_layer.layer_name
              },
              {
                text: item.assigned_group.group_name
              },
              {
                text: getAnzahlFragenString(item.questions)
              },
              {
                text: seconds2time(item.duration)
              }
            ]"></AppListTextAndSubText>
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
import { AppPageLayout, AppSearchAndFilterBar, AppButtonOption, AppListContainer, AppListTextAndSubText, AppIconLibrary } from "../../../libraries/components";
import LPAHistoryBar from "../components/LPAHistoryBar.vue";
import { arrayMixin } from "../../../libraries/mixins"; 
import { useAuditHistory } from "../store/auditHistory";
import { Audit } from "../interfaces/audit"
import { Question } from "../interfaces/question";

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppButtonOption,
    AppListContainer,
    AppListTextAndSubText,
    AppIconLibrary,
    LPAHistoryBar
  },

  mixins: [arrayMixin.getIsLast],

  async mounted() {
    const store = useAuditHistory();
    await store.fetchCompletedAudits();
    this.audits = store.audits;
  },
  data() {
    return {
      audits: [] as Audit[]
    }
  },
  methods: {
    getAuditStatus(audit: Audit) {
      var status = "";
      for (let i = 0; i < audit.answers.length; i++) {
        if (audit.answers[i].answer === "2") {
          return "red";
        }
        else if (audit.answers[i].answer === "1") {
          status = "yellow";
        }
        else if (status !== "yellow") {
          status = "green";
        }
      }
      return status;
    },
    getAuditText(audit: Audit) {
      var text = "";
      if (audit.recurrent_audit) {
        text = text + "Geplanter Audit ";
      }
      else {
        text = text + "Spontaner Audit ";
      }
      text = text + "vom " + new Date(audit.due_date).toLocaleDateString('de-DE', { year: 'numeric', month: 'short', day: 'numeric' });
      text = text + " von " + audit.auditor.first_name + " " + audit.auditor.last_name;
      return text;
    },
    getAnzahlFragenString(questions: Question[]) {
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