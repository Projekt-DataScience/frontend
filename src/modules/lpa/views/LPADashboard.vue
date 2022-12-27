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
                            text: concateStrings('Ersteller: ',
                              item.created_by_user.first_name,
                              ' ',
                              item.created_by_user.last_name
                            )
                          }
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
                            text: concateStrings('Ersteller: ',
                              item.created_by_user.first_name,
                              ' ',
                              item.created_by_user.last_name
                            )
                          }
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

import { useAudit } from "../store/audits";
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";
import AuthService from "../../../services/auth.service";
import { concateStringMixin } from "../../../mixins/stringMixin";

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
  },
  async mounted() {
    this.enableScroll();
    const store = useAudit();
    await store.fetchOpenAudits();
    //await store.fetchEmployees(this.openAudits[this.currentOpenAuditID].assigned_layer_id,this.openAudits[this.currentOpenAuditID].assigned_group_id);
    this.employees = store.employees;
    this.openAudits = store.openAudits;
    this.dataReady = true;
  },
  mixins: [concateStringMixin],

  data() {
    return {
      dataReady: false,
      openAudits: [] as Audit[],
      currentOpenAuditID: 0,
      employees: [] as User[],
      audited_user_id: 0,
      plannedAudits: [
        {
          id: 0,
          name: "Audit in der C-Gruppe durch Auditor Tony Stark",
          listItems: [
            {
              id: 0,
              type: "normal",
              text: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              text: "Wöchentlich: Di, Do",
            },
            {
              id: 2,
              type: "normal",
              text: "5 Fragen",
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
              text: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              text: "Monatlich: 1. Woche",
            },
            {
              id: 2,
              type: "normal",
              text: "5 Fragen",
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
              text: "Layer 1",
            },
            {
              id: 1,
              type: "normal",
              text: "Jährlich: Jan, Feb",
            },
            {
              id: 2,
              type: "normal",
              text: "5 Fragen",
            },
          ],
        },
      ],
      visibleTest: false,
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
  },
});
</script>