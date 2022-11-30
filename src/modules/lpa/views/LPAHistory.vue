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
      <div v-for="item in questions" :key="item.id">
        <AppListContainer :isLast="getStatus(questions, item.id)">
          <template #wrapperLeft>
            <LPAStatusAudit status="green"></LPAStatusAudit>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext
              :text="item.name"
              :subtext="item.listItems"
            ></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            <LPAQuestionBar
            :green="questions[0].statistics.green"
            :orange="questions[0].statistics.orange"
            :red="questions[0].statistics.red"
          ></LPAQuestionBar>
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
import LPAQuestionBar from "../components/LPAQuestionBar.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppCheckboxIcon from "../../../assets/Icons/AppCheckboxIcon.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import LPAStatusAudit from "../components/LPAStatusAudit.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppCheckboxIcon,
    AppButtonOption,
    LPAQuestionBar,
    AppListContainer,
    LPAStatusAudit,
    AppListTextAndSubtext
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
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
            },
          ],
          statistics: {
            green: 1000,
            orange: 50,
            red: 1,
          },
        },
        {
          id: 1,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
            },
          ],
          statistics: {
            green: 244,
            orange: 23,
            red: 2,
          },
        },
        {
          id: 2,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
            },
          ],
          statistics: {
            green: 244,
            orange: 23,
            red: 2,
          },
        },
      ],
    };
  },
  methods: {
    getStatus(list: any, item: Number){
      if(item < list.length - 1){
        return false
      }else {
        return true
      }
    }
  }
});
</script>