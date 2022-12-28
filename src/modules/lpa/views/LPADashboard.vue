<template>
  <div v-if="dataReady">
    <AppPopup v-if="visibleTest">
      <div class="p-7 border-b-2 border-gray-200">
        <!--<AppListTextAndSubtext
          :text="openAudits[0].name"
          :subtext="openAudits[0].listItems"
        ></AppListTextAndSubtext>-->
      </div>
      <div class="p-7 border-b-2 border-gray-200">
        <AppInputDropdown
          headline="Abweichungsgrund"
          name="description"
          :options="employees"
          initialOption="-- Grund auswählen --"
          :currentValue="audited_user_id.toString()"
          v-on:input="setAuditedUser($event)"
        ></AppInputDropdown>
      </div>
      <div class="p-7 flex items-center">
        <AppButtonPrimary
          name="Audit starten"
          v-bind:isActive="true"
          v-on:buttonClick="startNewAudit(3, currentOpenAuditID)"
        ></AppButtonPrimary>
        <AppButtonSecondary
          class="ml-5"
          name="Abbrechen"
          v-on:buttonClick="closePopup()"
        ></AppButtonSecondary>
      </div>
    </AppPopup>
    <AppPageLayout>
      <template #sidebar>
        <!-- content for the sidebar slot -->
        <LPASidebar currentPage="LPADashboard"></LPASidebar>
      </template>
      <template #header>
        <AppSearchAndFilterBar>
          <template #wrapperRight>
            <AppButtonPrimary
              class="mr-6"
              name="Audit erstellen"
              v-bind:isActive="true"
            >
              <template #icon>
                <AppIconLibrary
                  icon="plus"
                  styling="mr-2 pr-0.5 py-0.5"
                ></AppIconLibrary>
              </template>
            </AppButtonPrimary>
          </template>
        </AppSearchAndFilterBar>
      </template>
      <template #content>
        <div class="grid grid-cols-2 gap-6">
          <div class="col-span-1">
            <AppContainer containerName="Auditscore">
              <template #content>
                <VueApexCharts
                  height="300px"
                  type="radialBar"
                  :options="options"
                  :series="series"
                ></VueApexCharts>
              </template>
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
                <div v-for="(item, index) in openAudits" :key="index">
                  <AppListContainer :isLast="getStatus(item, openAudits)">
                    <template #wrapperRight>
                      <AppButtonTertiary
                        class="mr-4 ml-4"
                        name="Audit starten"
                        :id="index"
                        v-on:buttonClick="openPopup($event)"
                      ></AppButtonTertiary>
                      <AppButtonOption
                        v-bind:isVertical="false"
                      ></AppButtonOption>
                    </template>
                    <template #wrapperContent>
                      <AppListTextAndSubtext
                        v-if="item.recurrent_audit === true"
                        :text="
                          concateStrings(
                            'Geplanter Audit in der ',
                            item.assigned_group.group_name
                          )
                        "
                        :subtext="[
                          {
                            text: concateStrings(
                              'Layer ',
                              item.assigned_layer.layer_number.toString()
                            ),
                          },
                          {
                            text: concateStrings(
                              'Fälligkeit: ',
                              new Date(item.due_date).toLocaleDateString(
                                'de-DE',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                }
                              )
                            ),
                          },
                          {
                            text: concateStrings(
                              'Ersteller: ',
                              item.created_by_user.first_name,
                              ' ',
                              item.created_by_user.last_name
                            ),
                          },
                        ]"
                      ></AppListTextAndSubtext>
                      <AppListTextAndSubtext
                        v-else
                        :text="
                          concateStrings(
                            'Spontaner Audit in der ',
                            item.assigned_group.group_name
                          )
                        "
                        :subtext="[
                          {
                            text: concateStrings(
                              'Layer ',
                              item.assigned_layer.layer_number.toString()
                            ),
                          },
                          {
                            text: concateStrings(
                              'Fälligkeit: ',
                              new Date(item.due_date).toLocaleDateString(
                                'de-DE',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                }
                              )
                            ),
                          },
                          {
                            text: concateStrings(
                              'Ersteller: ',
                              item.created_by_user.first_name,
                              ' ',
                              item.created_by_user.last_name
                            ),
                          },
                        ]"
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
                  <AppListContainer :isLast="getStatus(item, plannedAudits)">
                    <template #wrapperRight>
                      <AppButtonOption
                        v-bind:isVertical="false"
                      ></AppButtonOption>
                    </template>
                    <template #wrapperContent>
                      <AppListTextAndSubtext
                        :text="
                          concateStrings(
                            'Audit in der ',
                            item.group.group_name,
                            ' durch ',
                            item.auditor.first_name,
                            ' ',
                            item.auditor.last_name
                          )
                        "
                        :subtext="[
                          {
                            text: concateStrings(
                              'Layer ',
                              item.layer.layer_number.toString()
                            ),
                          },
                          {
                            text: concateRhythm(
                              item.recurrence_type,
                              item.values
                            ),
                          },
                          {
                            text: concateStrings(
                              item.question_count.toString(),
                              ' Fragen'
                            ),
                          },
                        ]"
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
  </div>
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
import AppButtonPrimary from "../../../components/AppButtonPrimary.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import AppPopup from "../../../components/AppPopup.vue";
import AppButtonSecondary from "../../../components/AppButtonSecondary.vue";
import AppInputDropdown from "../../../components/AppInputDropdown.vue";
import VueApexCharts from "vue3-apexcharts";

import { useAudit } from "../store/audits";
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import AuthService from "../../../services/auth.service";
import { concateStringMixin } from "../../../mixins/stringMixin";
import { PlannedAudit } from "../interfaces/plannedAudit";

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
    AppButtonPrimary,
    AppIconLibrary,
    AppPopup,
    AppButtonSecondary,
    AppInputDropdown,
    VueApexCharts,
  },
  async mounted() {
    this.enableScroll();
    const store = useAudit();
    await store.fetchOpenAudits();
    await store.fetchPlannedAudits();
    //await store.fetchEmployees(this.openAudits[this.currentOpenAuditID].assigned_layer_id,this.openAudits[this.currentOpenAuditID].assigned_group_id);
    this.employees = store.employees;
    this.openAudits = store.openAudits;
    this.plannedAudits = store.plannedAudits;
    this.dataReady = true;

    //fetch Audit Score
    await store.fetchAuditScore();
    this.series = store.series;
  },
  mixins: [concateStringMixin],

  data() {
    return {
      dataReady: false,
      openAudits: [] as Audit[],
      currentOpenAuditID: 0,
      employees: [] as User[],
      audited_user_id: 0,
      plannedAudits: [] as PlannedAudit[],
      visibleTest: false,
      series: [] as number[],
      options:{
        plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: "Total",
              color: '#000000',
              formatter: function (w) {
                    return (w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0) / w.globals.series.length).toFixed() + '%'
                  }
            },
          },
        },
      },
      labels: ["Grün", "Gelb", "Rot"],
      colors: ["#1fd537", "#FFC537", "#E40010"],
      }
    };
  },
  methods: {
    async openPopup(event: any) {
      this.disableScroll();
      this.visibleTest = true;
      this.setCurrentOpenAuditID(event);
      const store = useAudit();
      await store.fetchEmployees(
        this.openAudits[this.currentOpenAuditID].assigned_layer_id,
        this.openAudits[this.currentOpenAuditID].assigned_group_id
      );
      this.employees = store.employees;
    },
    setCurrentOpenAuditID(event: any) {
      this.currentOpenAuditID = this.openAudits[event].id;
    },
    closePopup() {
      this.visibleTest = false;
      this.enableScroll();
    },
    disableScroll() {
      // Get the current page scroll position
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    },
    enableScroll() {
      window.onscroll = function () {};
    },
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true;
      } else {
        return false;
      }
    },
    startNewAudit(audited_user: number, audit_id: number) {
      const store = useAudit();
      store.startNewAudit(audited_user, audit_id);
      this.$router.push("/lpa/audit");
    },
    setAuditedUser(event: any) {
      this.audited_user_id = event;
    },
    concateRhythm(type: string, values: string[]) {
      if (type === "weekly") {
        return values.length + "x wöchentlich";
      } else if (type === "monthly") {
        return values.length + "x monatlich";
      } else if (type === "yearly") {
        return values.length + "x jährlich";
      } else {
        return "unknown";
      }
    },
  },
});
</script>