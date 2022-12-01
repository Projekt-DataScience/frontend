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
        <AppListContainer :isLast="getStatus(item)">
          <template #wrapperLeft>
            <AppIconLibrary icon="lpaStatus" :type="item.status" styling="h-10"></AppIconLibrary>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext
              :text="item.name"
              :subtext="item.listItems.slice(0,2)"
            ></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            <LPAHistoryBar :auditList="item.listItems"></LPAHistoryBar>
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
  data() {
    return {
      questions: [
        {
          id: 0,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ],
        },
        {
          id: 1,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 4,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 5,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ]
        },
        {
          id: 2,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "yellow",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
              color: "yellow"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 4,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 5,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ]
        },
        {
          id: 3,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ],
        },
        {
          id: 4,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ]
        },
        {
          id: 5,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "red",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 4,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 5,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 6,
              type: "normal",
              name: "Layer 1",
              color: "red"
            },
            {
              id: 7,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 8,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 9,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 10,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ],
        },
        {
          id: 6,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ]
        },
        {
          id: 7,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
            {
              id: 4,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 5,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ],
        },
        {
          id: 8,
          name: "Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?",
          status: "green",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
              color: "green"
            },
            {
              id: 2,
              type: "normal",
              name: "Layer 1",
              color: "green"
            },
            {
              id: 3,
              type: "normal",
              name: "TN-Gruppe",
              color: "green"
            },
          ]
        },
      ],
    };
  },
  methods: {
    getStatus(item: any){
      if(item === this.questions[this.questions.length-1]){
        return true
      }else {
        return false
      }
    }
  }
});
</script>