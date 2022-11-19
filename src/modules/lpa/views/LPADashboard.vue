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
              Noch kein Inhalt
            </template>
          </AppContainer>
        </div>
        <div class="col-span-2">
          <div class="w-full rounded-xl border-2 border-gray-200">
            <div class="border-b-2 border-gray-200 px-6 py-4">
              <div class="text-md font-semibold">Offene Audits</div>
            </div>
            <div class="px-6 py-4 grid grid-cols-1">
              <div class="grid grid-cols-10 border-b-2 border-gray-200 mb-4 pb-4 font-medium">
                <div class="col-span-8">
                  <div class="text-md">
                    Spontanter Audit in der C-Gruppe
                  </div>
                  <div class="flex items-center text-gray-400 pt-1">
                    <div>Layer 1</div>
                    <div class="px-4">
                      <LPADivideLineIcon
                        class="h-4 text-primary-blue"
                      ></LPADivideLineIcon>
                    </div>
                    <div>Fälligkeit: 19.11.2022</div>
                    <div class="px-4">
                      <LPADivideLineIcon
                        class="h-4 text-primary-blue"
                      ></LPADivideLineIcon>
                    </div>
                    <div>5 Fragen</div>
                  </div>
                </div>
                <div class="col-span-2 flex items-center justify-end">Text</div>
              </div>
              <div class="grid grid-cols-10">
                <div class="col-span-8 font-medium">
                  <div class="text-md">
                    Spontanter Audit in der C-Gruppe
                  </div>
                  <div class="flex items-center text-gray-400 pt-1">
                    <div>Layer 1</div>
                    <div class="px-4">
                      <LPADivideLineIcon
                        class="h-4 text-primary-blue"
                      ></LPADivideLineIcon>
                    </div>
                    <div>Fälligkeit: 19.11.2022</div>
                    <div class="px-4">
                      <LPADivideLineIcon
                        class="h-4 text-primary-blue"
                      ></LPADivideLineIcon>
                    </div>
                    <div>5 Fragen</div>
                  </div>
                </div>
                <div class="col-span-2">Text</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="h-96 w-full rounded-xl border-2 border-gray-200 p-6">
            Geplante Audits
          </div>
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
import LPAItemList from "../components/LPAItemList.vue";

export default defineComponent({
  name: "LPADashboard",
  components: {
    LPASidebar,
    LPAPageLayout,
    AppSearchAndFilterBar,
    LPADivideLineIcon,
    AppContainer,
    LPAItemList
  },
  data() {
    return {};
  },
});
</script>