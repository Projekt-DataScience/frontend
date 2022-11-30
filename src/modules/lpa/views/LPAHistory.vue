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
            <AppIconLibrary icon="lpaStatus" :type="item.status" styling="h-10"></AppIconLibrary>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext
              :text="item.name"
              :subtext="item.listItems"
            ></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
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

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppButtonOption,
    AppListContainer,
    AppListTextAndSubtext,
    AppIconLibrary
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
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "TN-Gruppe",
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
            },
            {
              id: 1,
              type: "normal",
              name: "C-Gruppe",
            },
          ]
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