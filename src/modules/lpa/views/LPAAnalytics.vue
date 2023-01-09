<template>
  <div v-if="dataReady">
    <AppPageLayout>
      <template #sidebar>
        <!-- content for the sidebar slot -->
        <LPASidebar currentPage="LPAAnalytics"></LPASidebar>
      </template>
      <template #header>
        <div class="flex items-center m-6">
          <div class="font-semibold text-lg">Auswertungen</div>
          <div class="flex-auto">
            <div class="flex justify-end mr-6">
              <AppInputDropdown name="description" :options="options" initialOption="--Zeitraum wählen--"
                :currentValue="currentAnswer.id.toString()" v-on:input="setReasonsByDropdown($event)">
              </AppInputDropdown>
            </div>
          </div>
        </div>
        <div class="flex items-center mx-6 mt-6">
          <div>
            <div class="hidden sm:block">
              <div class="">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->

                  <button href="#" class="whitespace-nowrap py-4 px-1 text-sm" :class="getActiveTab('audit')"
                    @click="setActiveTab('audit')" aria-current="page">
                    Auditanalyse
                  </button>

                  <button href="#" class="whitespace-nowrap py-4 px-1 text-sm" :class="getActiveTab('question')"
                    @click="setActiveTab('question')">
                    Fragenanalyse
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div v-if="currentTab === 'audit'">
          <div class="grid grid-cols-1 gap-6">
            <div class="col-span-1">
              <AppContainer containerName="Auditergebnisse">
                <template #content>
                  <VueApexCharts height="350px" width="99%" type="bar" :options="auditLast6MonthsOptions"
                    :series="auditLast6MonthsSeries"></VueApexCharts>
                </template>
              </AppContainer>
            </div>
            <div class="col-span-1">
              <AppContainer containerName="Gruppenergebnisse">
                <template #content>
                  <VueApexCharts height="350px" width="99%" type="bar" :options="auditPerGroupLast6MonthsOptions"
                    :series="auditPerGroupLast6MonthsSeries"></VueApexCharts>
                </template>
              </AppContainer>
            </div>
            <div class="col-span-1">
              <AppContainer containerName="Auditauswertung">
                <template #content>
                  Weitere Auswertungen zu Audits
                </template>
              </AppContainer>
            </div>
          </div>
        </div>
        <div v-if="currentTab === 'question'">
          <div>Hier könnten Fragenauswertungen stehen</div>
          <!--<div v-for="(item, index) in questions" :key="index">
             <AppListContainer :isLast="getStatus(item, questions)">
              <template #wrapperLeft>
                <div class="mr-4">
                  <AppIconLibrary icon="checkbox" type="active" styling="h-5 w-full text-gray-400"></AppIconLibrary>
                </div>
              </template>
              <template #wrapperContent>
                <AppListTextAndSubText :text="item.question" :subtext="[
                  {
                    text: item.question.layer.layer_name,
                  },
                  {
                    text: item.question.group.group_name,
                  },
                ]"></AppListTextAndSubText>
              </template>
              <template #wrapperRight>
                <LPAQuestionBar :green="item.num_green" :yellow="item.num_yellow"
                  :red="item.num_red"></LPAQuestionBar>
                <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
              </template>
            </AppListContainer>
          </div> -->
        </div>
      </template>
    </AppPageLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import { AppPageLayout, AppSearchAndFilterBar, AppContainer, AppInputDropDown } from "../../../libraries/components";

import { AnswerReason } from "../interfaces/answerReason";
import { useAnalytics } from "../store/analytics";
import { useQuestions } from "../store/questions";
import { AuditAnalytics } from "../interfaces/auditAnalytics";

import VueApexCharts from "vue3-apexcharts";
import { Question } from "../interfaces/question";
import { QuestionAndAnalytics } from "../interfaces/questionAndAnalytics";

export interface ApexBarChart {
  name: string;
  data: number[];
}

export default defineComponent({
  name: "LPAAnalytics",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppInputDropDown,
    AppContainer,
    VueApexCharts,
  },
  async mounted() {
    const store = useAnalytics();

    // AuditLast6Months
    // await store.fetchAuditLast6Months();
    // this.auditLast6MonthsSeries = store.auditLast6MonthsSeries;

    // for (let i = 0; i < store.auditLast6Months.length; i++) {
    //   var year = store.auditLast6Months[i].year;
    //   var month = store.auditLast6Months[i].month;
    //   this.auditLast6MonthsOptions.xaxis.categories.push(
    //     month + "/01/" + year + " GMT"
    //   );
    // }

    // test AuditLast6Months with sample Data (currently we have no data stored in the database)
    await store.fetchTestAuditLast6Months();
    this.auditLast6MonthsSeries = store.testAuditLast6MonthsSeries;

    for (let i = 0; i < store.testAuditLast6Months.length; i++) {
      var year = store.testAuditLast6Months[i].year;
      var month = store.testAuditLast6Months[i].month;
      this.auditLast6MonthsOptions.xaxis.categories.push(
        month + "/01/" + year + " GMT"
      );
    }

    // Test AuditLast6Months
    await store.fetchTestAuditLast6Months();
    this.auditLast6MonthsSeries = store.testAuditLast6MonthsSeries;

    for (let i = 0; i < store.testAuditLast6Months.length; i++) {
      var year = store.testAuditLast6Months[i].year;
      var month = store.testAuditLast6Months[i].month;
      this.auditLast6MonthsOptions.xaxis.categories.push(
        month + "/01/" + year + " GMT"
      );
    }

    // AuditPerGroupLast6Months
    await store.fetchAuditPerGroupLast6Months();
    this.auditPerGroupLast6MonthsSeries = store.auditPerGroupLast6MonthsSeries;

    for (let i = 0; i < store.auditPerGroupLast6Months.length; i++) {
      this.auditPerGroupLast6MonthsOptions.xaxis.categories.push(
        store.auditPerGroupLast6Months[i].group_name
      );
    }

    // QuestionAnalysis
    /*const questionStore = useQuestions();
    await questionStore.fetchQuestionsWithAnalytics();
    this.questions = questionStore.questionsAndAnalytics;*/

    // data is ready -> render page
    this.dataReady = true;
  },
  data() {
    return {
      dataReady: false,
      questions: [] as QuestionAndAnalytics[],
      options: [
        {
          id: 0,
          description: "Letzte 6 Monate",
        },
      ] as AnswerReason[],
      currentAnswer: {
        id: 0,
        description: "Letzte 6 Monate",
      } as AnswerReason,
      currentTab: "audit",
      auditPerGroupLast6MonthsOptions: {
        chart: {
          type: "bar",
          height: 350,
          width: '95%',
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 0,
            dataLabels: {
              total: {
                enabled: false,
                style: {
                  fontSize: "20px",
                  fontWeight: 900,
                },
              },
            },
          }
        },
        xaxis: {
          type: "category",
          categories: [] as string[],
          labels: {
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        },
        legend: {
          position: "right",
          offsetY: 40,
          offsetX: -20,
        },
        fill: {
          opacity: 1,
        },
        colors: ["#1fd537", "#FFC537", "#E40010"]
      },
      auditPerGroupLast6MonthsSeries: [] as ApexBarChart[],
      auditLast6MonthsOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [] as string[],
        },
        legend: {
          position: "right",
          offsetY: 40,
          offsetX: -20,
        },
        fill: {
          opacity: 1,
        },
        colors: ["#1fd537", "#FFC537", "#E40010"],
      },
      testSeries: [
        {
          name: "Grün",
          data: [5, 3, 44, 20, 50, 3],
        },
        {
          name: "Gelb",
          data: [6, 5, 9, 8, 4, 3],
        },
        {
          name: "Rot",
          data: [1, 0, 1, 0, 0, 3],
        },
      ] as ApexBarChart[],
      auditLast6MonthsSeries: [] as ApexBarChart[],
    }
  },
  methods: {
    setReasonsByDropdown(event: any) {
      this.currentAnswer = event;
    },
    getActiveTab(tab: string) {
      var active =
        "border-primary-blue text-primary-blue border-b-2 font-semibold";
      var inactive =
        "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300 border-b-2 font-semibold";
      if (this.currentTab === "audit") {
        if (tab === "audit") {
          return active;
        } else {
          return inactive;
        }
      } else if (this.currentTab === "question") {
        if (tab === "question") {
          return active;
        } else {
          return inactive;
        }
      }
    },
    setActiveTab(tab: string) {
      this.currentTab = tab;
    },
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>