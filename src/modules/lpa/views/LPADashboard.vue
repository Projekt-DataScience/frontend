<template>
  <LPAPageLayout>
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
            <template #content>
              Noch kein Inhalt
            </template>
          </AppContainer>
        </div>
        <div class="col-span-1">
          <AppContainer containerName="Fragenanalyse">
            <template #content>
              Noch kein Inhalt
            </template>
          </AppContainer>
        </div>
        <div class="col-span-2">
          <AppContainer containerName="Offene Audits">
            <template #content>
              <LPAAuditList :listItems="openAudits">
                <template #listControlls>
                  <AppOptionButton v-bind:isVertical="false"></AppOptionButton>
                </template>
              </LPAAuditList>
            </template>
          </AppContainer>
        </div>
        <div class="col-span-2">
          <AppContainer containerName="Geplante Audits">
            <template #content>
              <LPAAuditList :listItems="plannedAudits">
                <template #listControlls>
                  <AppOptionButton v-bind:isVertical="false"></AppOptionButton>
                </template>
              </LPAAuditList>
            </template>
          </AppContainer>
        </div>
      </div>
    </template>
  </LPAPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import LPAPageLayout from "../components/LPAPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import LPADivideLineIcon from "../../../assets/Icons/LPADivideLineIcon.vue";
import AppContainer from "../../../components/AppContainer.vue";
import LPAAuditList from "../components/LPAAuditList.vue";
import AppOptionButton from "../../../components/AppOptionButton.vue";

export default defineComponent({
  name: "LPADashboard",
  components: {
    LPASidebar,
    LPAPageLayout,
    AppSearchAndFilterBar,
    LPADivideLineIcon,
    AppContainer,
    LPAAuditList,
    AppOptionButton
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
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        },
        {
          id: 1,
          name: "Spontanter Audit in der C-Gruppe",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        },
        {
          id: 2,
          name: "Spontanter Audit in der C-Gruppe",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Fälligkeit: 22.11.2022"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        }
      ],
      plannedAudits: [
        {
          id: 0,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Wöchentlich: Di, Do"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        },
        {
          id: 1,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Monatlich: 1. Woche"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        },
        {
          id: 2,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              name: "Layer 1"
            },
            {
              id: 1,
              type: "normal",
              name: "Jährlich: Jan, Feb"
            },
            {
              id: 2,
              type: "normal",
              name: "5 Fragen"
            },
          ]
        }
      ]
    };
  },
});
</script>