<template>
  <div v-if="dataReady">
    <AppPopup v-if="visibleStartAudit">
      <div class="p-7 border-b-2 border-gray-200">
        <AppListTextAndSubText v-if="openAudits[currentOpenAuditIndex].recurrent_audit === true" :text="
          concateStrings(
            'Geplanter Audit für die Gruppe ',
            openAudits[currentOpenAuditIndex].assigned_group.group_name
          )
        " :subtext="[
  {
    text: concateStrings(
      'Layer ',
      openAudits[currentOpenAuditIndex].assigned_layer.layer_number.toString()
    ),
  },
  {
    text: concateStrings(
      'Fälligkeit: ',
      new Date(openAudits[currentOpenAuditIndex].due_date).toLocaleDateString(
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
      openAudits[currentOpenAuditIndex].created_by_user.first_name,
      ' ',
      openAudits[currentOpenAuditIndex].created_by_user.last_name
    ),
  },
]"></AppListTextAndSubText>
<AppListTextAndSubText v-else :text="
          concateStrings(
            'Spontaner Audit für die Gruppe ',
            openAudits[currentOpenAuditIndex].assigned_group.group_name
          )
        " :subtext="[
  {
    text: concateStrings(
      'Layer ',
      openAudits[currentOpenAuditIndex].assigned_layer.layer_number.toString()
    ),
  },
  {
    text: concateStrings(
      'Fälligkeit: ',
      new Date(openAudits[currentOpenAuditIndex].due_date).toLocaleDateString(
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
      openAudits[currentOpenAuditIndex].created_by_user.first_name,
      ' ',
      openAudits[currentOpenAuditIndex].created_by_user.last_name
    ),
  },
]"></AppListTextAndSubText>
      </div>
      <div class="p-7 border-b-2 border-gray-200">
        <AppInputDropDown headline="Befragter" name="description" :options="currentEmployees"
          initialOption="-- Person auswählen --" :currentValue="audited_user_id"
          v-on:input="setAuditedUser($event)"></AppInputDropDown>
      </div>
      <div class="p-7 flex items-center">
        <AppButtonPrimary name="Audit starten" v-bind:isActive="checkIfUserIsAssigned()"
          v-on:buttonClick="startNewAudit(parseInt(audited_user_id), currentOpenAuditID)"></AppButtonPrimary>
        <AppButtonSecondary class="ml-5" name="Abbrechen" v-on:buttonClick="closePopupStartAudit()">
        </AppButtonSecondary>
      </div>
    </AppPopup>
    <AppPopup v-if="visibleCreateAudit">
      <div class="p-7 border-b-2 border-gray-200">
        <div class="text-md font-semibold">Spontanen Audit erstellen</div>
      </div>
      <div class="p-7 border-b-2 border-gray-200">
        <div class="grid grid-cols-3 gap-6">
          <div>
            <AppInputDropDown headline="Layer" name="description" :options="createAuditLayer"
              initialOption="Layer wählen..." :currentValue="createAuditCurrentLayer"
              v-on:input="setCreateAuditLayerByDropdown($event)"></AppInputDropDown>
          </div>
          <div>
            <AppInputDropDown headline="Gruppe" name="description" :options="createAuditGroup"
              initialOption="Gruppe wählen..." :currentValue="createAuditCurrentGroup"
              v-on:input="setCreateAuditGroupByDropdown($event)"></AppInputDropDown>
          </div>
          <div>
            <AppInputDropDown headline="Fragen" name="description" :options="createAuditNumber"
              initialOption="Anzahl wählen..." :currentValue="createAuditCurrentNumber"
              v-on:input="setCreateAuditNumberByDropdown($event)"></AppInputDropDown>
          </div>
        </div>
      </div>
      <div class="p-7 flex items-center">
        <AppButtonPrimary name="Audit erstellen" v-bind:isActive="getCreateAuditIsActive()"
          v-on:buttonClick="createNewAudit()"></AppButtonPrimary>
        <AppButtonSecondary class="ml-5" name="Abbrechen" v-on:buttonClick="closePopupCreateAudit()">
        </AppButtonSecondary>
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
            <AppButtonPrimary class="mr-6" name="Audit erstellen" v-bind:isActive="true"
              v-on:buttonClick="openPopupCreateAudit($event)">
              <template #icon>
                <AppIconLibrary icon="plus" styling="mr-2 pr-0.5 py-0.5"></AppIconLibrary>
              </template>
            </AppButtonPrimary>
          </template>
        </AppSearchAndFilterBar>
      </template>
      <template #content>
        <div class="grid grid-cols-3 gap-6 auto-rows-max">
          <div class="col-span-1">
            <AppContainer containerName="Auditscore">
              <template #content>
                <VueApexCharts height="300px" type="radialBar" :options="options" :series="series"></VueApexCharts>
              </template>
            </AppContainer>
          </div>
          <div class="col-span-2 w-full rounded-xl border-2 border-gray-200 h-full" id="newsBrick">
            <!-- Temporäre Kachel - muss noch überarbeitet werden-->
            <div>
              <div class="border-b-2 border-gray-200 px-6 py-3 h-full">
                <div class="flex items-center">
                  <div class="text-md font-semibold">Neuigkeiten</div>
                  <div class="flex-auto">
                    <div class="flex justify-end items-center">
                      <AppButtonTertiary name="Alle anzeigen"></AppButtonTertiary>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-12 h-full">
                <div class="col-span-1">
                  <div class="flex justify-center items-center" :style="`height: ${305}px !important;`">
                    <AppIconLibrary icon="arrow" styling="text-gray-400"></AppIconLibrary>
                  </div>
                </div>
                <div class="
                    col-span-10
                    border-l-2 border-r-2 border-gray-200
                    h-full
                  ">
                  <div class="p-6 border-b-2 border-gray-200">
                    <AppListTextAndSubText text="Haben alle ausgewiesenen Messmittel eine aktuelle Prüfkette?" :subtext="[
                      {
                        text: 'Layer 1',
                      },
                      {
                        text: 'C-Gruppe',
                      },
                    ]"></AppListTextAndSubText>
                  </div>
                  <div class="p-6 flex gap-6 items-center">
                    <!-- <div class="flex gap-4">
                      <div
                        class="
                          border-4 border-cl-green
                          rounded-full
                          h-16
                          w-16
                          flex
                          justify-center
                          items-center
                          font-semibold
                        "
                      >
                        60%
                      </div>
                      <div
                        class="
                          border-4 border-cl-yellow
                          rounded-full
                          h-16
                          w-16
                          flex
                          justify-center
                          items-center
                          font-semibold
                        "
                      >
                        20%
                      </div>
                      <div
                        class="
                          border-4 border-cl-red
                          rounded-full
                          h-16
                          w-16
                          flex
                          justify-center
                          items-center
                          font-semibold
                        "
                      >
                        20%
                      </div>
                    </div>-->
                    <div>
                      <VueApexCharts width="200px" type="radialBar" :options="testOptions" :series="testSeries">
                      </VueApexCharts>
                    </div>
                    <div>
                      <div class="pb-4 font-semibold text-base">
                        Diese Frage wird häufig negativ beantwortet.
                      </div>
                      <div class="pb-2">
                        Deshalb wird als Lösung für dieses Problem empfohlen,
                        die Frage zu überprüfen.
                      </div>
                      <AppButtonTertiary name="Als gelesen markieren"></AppButtonTertiary>
                    </div>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="flex justify-center items-center h-full">
                    <AppIconLibrary icon="arrow" styling="text-gray-400 rotate-180"></AppIconLibrary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <AppContainer containerName="Offene Audits">
            <template #content>
              <div v-for="(item, index) in openAudits" :key="index">
                <AppListContainer :isLast="getStatus(item, openAudits)">
                  <template #wrapperRight>
                    <AppButtonTertiary class="mr-4 ml-4" name="Audit starten" :id="index"
                      v-on:buttonClick="openPopupStartAudit($event)"></AppButtonTertiary>
                    <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
                  </template>
                  <template #wrapperContent>
                    <AppListTextAndSubText v-if="item.recurrent_audit === true" :text="
                      concateStrings(
                        'Geplanter Audit für die Gruppe ',
                        item.assigned_group.group_name
                      )
                    " :subtext="[
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
]"></AppListTextAndSubText>
                    <AppListTextAndSubText v-else :text="
                      concateStrings(
                        'Spontaner Audit für die Gruppe ',
                        item.assigned_group.group_name
                      )
                    " :subtext="[
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
]"></AppListTextAndSubText>
                  </template>
                </AppListContainer>
              </div>
            </template>
          </AppContainer>
        </div>
        <div class="mt-6">
          <AppContainer containerName="Geplante Audits">
            <template #content>
              <div v-for="item in plannedAudits" :key="item.id">
                <AppListContainer :isLast="getStatus(item, plannedAudits)">
                  <template #wrapperRight>
                    <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
                  </template>
                  <template #wrapperContent>
                    <AppListTextAndSubText :text="
                      concateStrings(
                        'Audit für die Gruppe ',
                        item.group.group_name,
                        ' durch ',
                        item.auditor.first_name,
                        ' ',
                        item.auditor.last_name
                      )
                    " :subtext="[
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
]"></AppListTextAndSubText>
                  </template>
                </AppListContainer>
              </div>
            </template>
          </AppContainer>
        </div>
      </template>
    </AppPageLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import {
  AppPageLayout, AppSearchAndFilterBar, AppContainer, AppListContainer, AppButtonOption,
  AppButtonTertiary, AppListTextAndSubText, AppButtonPrimary, AppIconLibrary, AppPopup,
  AppButtonSecondary, AppInputDropDown
} from "../../../libraries/components";

import VueApexCharts from "vue3-apexcharts";

import { useAudit } from "../store/audits";
import { useUser } from "../../../libraries/stores";
import { Audit } from "../interfaces/audit";
import { User } from "../../../libraries/interfaces";
import { authService } from "../../../libraries/services";
import { stringMixin } from "../../../libraries/mixins";
import { PlannedAudit } from "../interfaces/plannedAudit";
import { AnswerReason } from "../interfaces/answerReason";
import { Answer } from "../interfaces/answer";
import { Store } from "pinia";

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
    AppListTextAndSubText,
    AppButtonPrimary,
    AppIconLibrary,
    AppPopup,
    AppButtonSecondary,
    AppInputDropDown,
    VueApexCharts,
  },
  async mounted() {
    this.enableScroll();
    const auditStore = useAudit();
    await auditStore.fetchOpenAudits();
    await auditStore.fetchPlannedAudits();
    //await auditStore.fetchEmployees(this.openAudits[this.currentOpenAuditID].assigned_layer_id,this.openAudits[this.currentOpenAuditID].assigned_group_id);
    this.employees = auditStore.employees;
    this.openAudits = auditStore.openAudits;
    this.plannedAudits = auditStore.plannedAudits;

    //fetch Audit Score
    await auditStore.fetchAuditScore();
    this.series = auditStore.series;

    //fetch Layers from User Store for create audit dropdown
    const userStore = useUser();
    await userStore.fetchLayers();

    for (let i = 0; i < userStore.layers.length; i++) {
      this.createAuditLayer.push({
        id: userStore.layers[i].id,
        description: userStore.layers[i].layer_number.toString(),
      });
    }

    //fetch Groups from User Store for create audit dropdown
    await userStore.fetchGroups();

    for (let i = 0; i < userStore.groups.length; i++) {
      this.createAuditGroup.push({
        id: userStore.groups[i].id,
        description: userStore.groups[i].group_name,
      });
    }

    //generate Numbers for create audit dropdown
    for (let i = 1; i < 21; i++) {
      this.createAuditNumber.push({
        id: i,
        description: i.toString(),
      });
    }

    // render page
    this.dataReady = true;
  },
  mixins: [stringMixin.concateStringMixin],

  data() {
    return {
      dataReady: false,
      openAudits: [] as Audit[],
      currentOpenAuditID: 0,
      currentOpenAuditIndex: 0,
      employees: [] as User[],
      currentEmployees: [] as AnswerReason[],
      audited_user_id: 'null',
      plannedAudits: [] as PlannedAudit[],
      visibleStartAudit: false,
      visibleCreateAudit: false,
      series: [] as number[],
      tmpSeries: [70, 40, 30] as number[],
      createAuditLayer: [] as AnswerReason[],
      createAuditCurrentLayer: "",
      createAuditGroup: [] as AnswerReason[],
      createAuditCurrentGroup: "",
      createAuditNumber: [] as AnswerReason[],
      createAuditCurrentNumber: "",
      options: {
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "Total",
                color: "#000000",
                formatter: function (w) {
                  return (
                    (
                      w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0) / w.globals.series.length
                    ).toFixed() + "%"
                  );
                },
              },
            },
          },
        },
        labels: ["Grün", "Gelb", "Rot"],
        colors: ["#1fd537", "#FFC537", "#E40010"],
      },
      testOptions: {
        chart: {
          height: 100,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
              imageWidth: 150,
              imageHeight: 150
            },
            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                offsetY: 5,
                fontSize: '16px'
              }
            }
          },
        },
        labels: ['Cricket'],
        colors: ["#E40010"],
      },
      testSeries: [67],
    };
  },
  methods: {
    async openPopupStartAudit(event: any) {
      this.currentOpenAuditIndex = event;
      this.setCurrentOpenAuditID(event);
      const store = useAudit();
      await store.fetchEmployees(
        this.openAudits[event].assigned_group.id,
        this.openAudits[event].assigned_layer.id
      );

      // the dropdown needs a Answer (id , description)
      this.currentEmployees = [];
      for( let i = 0; i < store.employees.length; i++){
        this.currentEmployees.push({
          id: store.employees[i].id,
          description: this.concateStrings(store.employees[i].first_name, ' ', store.employees[i].last_name)
        })
      }

      this.disableScroll();
      this.visibleStartAudit = true;
    },
    async openPopupCreateAudit(event: any) {
      this.disableScroll();
      this.visibleCreateAudit = true;
    },
    setCurrentOpenAuditID(event: any) {
      this.currentOpenAuditID = this.openAudits[event].id;
    },
    closePopupStartAudit() {
      this.visibleStartAudit = false;
      this.enableScroll();
    },
    closePopupCreateAudit() {
      this.visibleCreateAudit = false;
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
      window.onscroll = function () { };
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
      this.audited_user_id = event.toString();
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
    setCreateAuditLayerByDropdown(event: any) {
      this.createAuditCurrentLayer = event;
    },
    setCreateAuditGroupByDropdown(event: any) {
      this.createAuditCurrentGroup = event;
    },
    setCreateAuditNumberByDropdown(event: any) {
      this.createAuditCurrentNumber = event;
    },
    getCreateAuditIsActive() {
      if (
        this.createAuditCurrentLayer !== "" &&
        this.createAuditCurrentGroup !== "" &&
        this.createAuditCurrentNumber !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    async createNewAudit() {
      const auditStore = useAudit();
      await auditStore.createAdHocAudit(
        parseInt(this.createAuditCurrentLayer),
        parseInt(this.createAuditCurrentGroup),
        parseInt(this.createAuditCurrentNumber)
      );
      this.closePopupCreateAudit();
    },
    checkIfUserIsAssigned(){
      if(this.audited_user_id === 'null'){
        return false
      } return true
    }
  },
});
</script>