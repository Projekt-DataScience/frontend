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
      <AppItemList :listItems="questions">
        <template #wrapperLeft>
          <AppCheckboxIcon class="h-5 w-full text-gray-400 mr-4"></AppCheckboxIcon>
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
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import AppItemList from "../../../components/AppItemList.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppCheckboxIcon from "../../../assets/Icons/AppCheckboxIcon.vue";
import LPAQuestionBar from "../components/LPAQuestionBar.vue";

export default defineComponent({
  name: "LPAQuestions",
  components: {
    LPASidebar,
    AppPageLayout,
    AppSearchAndFilterBar,
    AppItemList,
    AppButtonOption,
    AppCheckboxIcon,
    LPAQuestionBar
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