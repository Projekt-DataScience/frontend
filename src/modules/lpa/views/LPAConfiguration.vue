<template>
  <div v-if="dataReady">
    <AppPageLayout>
      <template #sidebar>
        <!-- content for the sidebar slot -->
        <LPASidebar currentPage="LPAConfiguration"></LPASidebar>
      </template>
      <template #header>
        <div class="flex items-center m-6">
          <div class="font-semibold text-lg">Konfiguration</div>
          <div class="flex-auto">
            <div class="flex justify-end">
              <!--Rechte Header Seite-->
            </div>
          </div>
        </div>
        <div class="flex items-center mx-6 mt-6">
          <div>
            <div class="hidden sm:block">
              <div class="">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->

                  <button href="#" class="whitespace-nowrap py-4 px-1 text-sm" :class="getActiveTab('planned')"
                    @click="setActiveTab('planned')" aria-current="page">
                    Geplante Audits
                  </button>

                  <button href="#" class="whitespace-nowrap py-4 px-1 text-sm" :class="getActiveTab('settings')"
                    @click="setActiveTab('settings')">
                    Einstellungen
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div v-if="currentTab === 'planned'">
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(item, index) in layers" :key="index">
              <AppContainer containerName="Layer">
                <template #content>
                  <div v-for="(items, index2) in getPlannedByLayer(item.id)" :key="index2">
                    <AppListContainer :isLast="getIsLast(items, getPlannedByLayer(item.id))">
                      <template #wrapperContent>
                        <div class="flex">
                          <AppListTextWithDividerLines :isLast="false" :boldText="items.group.group_name">
                          </AppListTextWithDividerLines>
                          <AppListTextWithDividerLines :isLast="false" :text="
  concateRhythm(items.recurrence_type, items.values)
"></AppListTextWithDividerLines>
                          <AppListTextWithDividerLines :isLast="true" :text="
  concateStrings(
    items.question_count.toString(),
    ' Fragen'
  )
"></AppListTextWithDividerLines>
                        </div>
                      </template>
                      <template #wrapperRight>
                        <AppButtonOption v-bind:is-vertical="true">
                        </AppButtonOption>
                      </template>
                    </AppListContainer>
                  </div>
                </template>
                <template #header>
                  <div class="flex items-center px-6 py-2">
                    <div class="text-md font-semibold flex">
                      <div class="text-primary-blue">
                        {{
    concateStrings("Layer ", item.layer_number.toString())
}}
                      </div>
                      <div class="ml-4">{{ item.layer_name }}</div>
                    </div>
                    <div class="flex-auto">
                      <div class="flex justify-end items-center">
                        <AppButtonAdd name="Hinzuf??gen"></AppButtonAdd>
                        <div class="ml-4">
                          <AppButtonOption :isVertical="true"></AppButtonOption>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </AppContainer>
            </div>
          </div>
        </div>
        <div v-if="currentTab === 'settings'">
          Hier k??nnten weitere Einstellungen stehen, beispielsweise zu
          F??llikeitsdatum und Benachrichtigung
        </div>
      </template>
    </AppPageLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import {
  AppPageLayout, AppSearchAndFilterBar, AppContainer, AppButtonAdd,
  AppButtonOption, AppListTextWithDividerLines, AppListContainer
}
  from "../../../libraries/components";
import { Layer } from "../../../libraries/interfaces";
import { useUser } from "../../../libraries/stores";
import { stringMixin } from "../../../libraries/mixins";
import { arrayMixin } from "../../../libraries/mixins";
import { useAudit } from "../store/audits";


export default defineComponent({
  name: "LPAConfiguration",
  components: {
    LPASidebar,
    AppPageLayout,
    AppSearchAndFilterBar,
    AppContainer,
    AppButtonAdd,
    AppButtonOption,
    AppListTextWithDividerLines,
    AppListContainer,
  },
  mixins: [stringMixin.concateStringMixin, arrayMixin.getIsLast, stringMixin.germanDateStrings],
  setup() {
    const auditStore = useAudit();

    return { getPlannedByLayer: auditStore.getPlannedByLayer };
  },
  async mounted() {
    //fetch Layers from User Store
    const userStore = useUser();
    await userStore.fetchLayers();
    this.layers = userStore.layers.reverse();

    // fetch all planned audits
    const auditStore = useAudit();
    await auditStore.fetchAllPlannedAudits();

    // render page
    this.dataReady = true;
  },
  data() {
    return {
      dataReady: false,
      currentTab: "planned",
      layers: [] as Layer[],
    };
  },
  methods: {
    getActiveTab(tab: string) {
      var active =
        "border-primary-blue text-primary-blue border-b-2 font-semibold";
      var inactive =
        "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 border-b-2 font-semibold";
      if (this.currentTab === "planned") {
        if (tab === "planned") {
          return active;
        } else {
          return inactive;
        }
      } else if (this.currentTab === "settings") {
        if (tab === "settings") {
          return active;
        } else {
          return inactive;
        }
      }
    },
    setActiveTab(tab: string) {
      this.currentTab = tab;
    },
    concateRhythm(type: string, values: string[]) {
      if (type === "weekly") {
        var tmp = "";
        for (let i = 0; i < values.length; i++) {
          tmp = tmp + this.getGermanWeekdayValuesShort(values[i]);
          if (i !== values.length - 1) {
            tmp = tmp + ", "
          }
        }
        return "w??chentlich: " + tmp;
      } else if (type === "monthly") {
        var tmp = "";
        for (let i = 0; i < values.length; i++) {
          tmp = tmp + values[i] + ".";
          if (i !== values.length - 1) {
            tmp = tmp + ", "
          }
        }
        return "monatlich: " + tmp;
      } else if (type === "yearly") {
        var tmp = "";
        for (let i = 0; i < values.length; i++) {
          tmp = tmp + this.getGermanMonthValuesShort(values[i]);
          if (i !== values.length - 1) {
            tmp = tmp + ", "
          }
        }
        return "j??hrlich: " + tmp;
      } else {
        return "unknown";
      }
    },
  },
});
</script>