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
      <AppItemList :listItems="questions">
        <template #wrapperLeft>
          <LPAStatusAudit status="green"></LPAStatusAudit>
        </template>
        <template #wrapperRight>
          <LPAQuestionBar :green="questions[0].statistics.green" :orange="questions[0].statistics.orange" :red="questions[0].statistics.red"></LPAQuestionBar>
          <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
        </template>
      </AppItemList>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import LPAQuestionBar from "../components/LPAQuestionBar.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppCheckboxIcon from "../../../assets/Icons/AppCheckboxIcon.vue";
import AppItemList from "../../../components/AppItemList.vue";
import LPAStatusAudit from "../components/LPAStatusAudit.vue";

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppCheckboxIcon,
    AppButtonOption,
    LPAQuestionBar,
    AppItemList,
    LPAStatusAudit
  },
  data() {
    return {
      questions: [
        {
          id: 0,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe"
            }
          ],
          statistics: {
            green: 1000,
            orange: 50,
            red: 1,
          }
        },
        {
          id: 1,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe"
            }
          ],
          statistics: {
            green: 244,
            orange: 23,
            red: 2,
          }
        },
        {
          id: 2,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe"
            }
          ],
          statistics: {
            green: 244,
            orange: 23,
            red: 2,
          }
        }
      ],
    };
  },
}); 
</script>