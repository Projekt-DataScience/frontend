<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPADashboard"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
    <template #content>
      <div class="grid grid-cols-2 gap-6">
        <div class="col-span-1">
          <AppContainer containerName="Auditscore">
            <template #content> Noch kein Inhalt </template>
          </AppContainer>
        </div>
        <div class="col-span-1">
          <AppContainer containerName="Fragenanalyse">
            <template #content> Noch kein Inhalt </template>
          </AppContainer>
        </div>
        <div class="col-span-2">
          <AppContainer containerName="Offene Audits">
            <template #content>
              <div v-for="item in openAudits" :key="item.id">
                <AppListContainer :isLast="getStatus(openAudits, item.id)">
                  <template #wrapperRight>
                    <router-link :to="{name: 'LPAAudit',params: { id: 1 },}"><AppButtonTertiary name="Audit starten"></AppButtonTertiary></router-link>
                    <AppButtonOption
                      v-bind:isVertical="false"
                    ></AppButtonOption>
                  </template>
                  <template #wrapperContent>
                    <AppListTextAndSubtext
                      :text="item.name"
                      :subtext="item.listItems"
                    ></AppListTextAndSubtext>
                  </template>
                </AppListContainer>
              </div>
            </template>
          </AppContainer>
        </div>
        <div class="col-span-2">
          <AppContainer containerName="Geplante Audits">
            <template #content>
              <div v-for="item in plannedAudits" :key="item.id">
                <AppListContainer :isLast="getStatus(plannedAudits, item.id)">
                  <template #wrapperRight>
                    <AppButtonOption
                      v-bind:isVertical="false"
                    ></AppButtonOption>
                  </template>
                  <template #wrapperContent>
                    <AppListTextAndSubtext
                      :text="item.name"
                      :subtext="item.listItems"
                    ></AppListTextAndSubtext>
                  </template>
                </AppListContainer>
              </div>
            </template>
          </AppContainer>
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import AppContainer from "../../../components/AppContainer.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppButtonTertiary from "../../../components/AppButtonTertiary.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";

export default defineComponent({
  name: "LPADashboard",
  components: {
    LPASidebar,
    AppPageLayout,
    AppSearchAndFilterBar,
    AppContainer,
    AppListContainer,
    AppButtonOption,
    AppButtonTertiary,
    AppListTextAndSubtext,
  },
  data() {
    return {
      openAudits: [
        {
          id: 0,
          name: "Spontanter Audit in der C-Gruppe",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
        },
        {
          id: 1,
          name: "Spontanter Audit in der C-Gruppe",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
        },
        {
          id: 2,
          name: "Spontanter Audit in der C-Gruppe",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
        },
      ],
      plannedAudits: [
        {
          id: 0,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Wöchentlich: Di, Do",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
        },
        {
          id: 1,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Monatlich: 1. Woche",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
        },
        {
          id: 2,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              name: "Jährlich: Jan, Feb",
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen",
            },
          ],
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