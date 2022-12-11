<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAAudit"></LPASidebar>
    </template>
    <template #header>
      <div class="flex items-center m-6">
        <div class="font-semibold text-lg">Audit durchführen</div>
        <div class="flex-auto">
          <div class="flex justify-end">
            <AppButtonPrimary
              class="mr-6"
              name="Abschließen"
              v-bind:isActive="false"
            >
            </AppButtonPrimary>
            <AppButtonSecondary class="mr-8" name="Abbrechen">
            </AppButtonSecondary>
          </div>
        </div>
      </div>
      <div class="flex items-center m-6" v-for="(item, index) in audit" :key="index">
          <!--Auditor-->
          <AppListTextWithDividerLine
            :text="getUserText(item.auditor[0])"
            subtext="Auditor"
            :imgPath="item.auditor[0].profile_picture"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Befragter-->
          <AppListTextWithDividerLine
            :text="getUserText(audited_user[0])"
            subtext="Befragter"
            :imgPath="audited_user[0].profile_picture"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Layer-->
          <AppListTextWithDividerLine
            :text="getLayer(item.assigned_layer)"
            subtext="Layer"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Gruppe-->
          <AppListTextWithDividerLine
            :text="item.assigned_group"
            subtext="Gruppe"
            v-bind:isLast="false"
          ></AppListTextWithDividerLine>
          <!--Fälligkeit-->
          <AppListTextWithDividerLine
            :text="getDate(item.due_date)"
            subtext="Fälligkeit"
            v-bind:isLast="true"
          ></AppListTextWithDividerLine>
      </div>
    </template>
    <template #content>
      <div v-for="(item, index) in audit" :key="index">
        <div v-for="(items, index) in item.questions" :key="index">
          <AppListContainer :isLast="getIsLast(items, item.questions)">
            <template #wrapperLeft>
              <AppIconLibrary
                icon="lpaStatus"
                :type="getQuestionStatus(items.id, item)"
                styling="h-10"
              ></AppIconLibrary>
            </template>
            <template #wrapperContent>
              <AppListTextAndSubtext
                :text="items.title"
                :subtext="[
                  {
                    text: items.category,
                  },
                ]"
              ></AppListTextAndSubtext>
            </template>
            <template #wrapperRight>
              <AppButtonTertiary
                v-if="getQuestionStatus(items.id, item) === 'gray'"
                name="Beantworten"
              ></AppButtonTertiary>
              <div class="text-black" v-else>
                <AppButtonTertiary
                  v-bind:isActive="false"
                  name="Ändern"
                ></AppButtonTertiary>
              </div>
            </template>
          </AppListContainer>
        </div>
      </div>
    </template>
  </AppPageLayout>
</template>

<!--{{$route.params.id}}-->
<script lang="ts">
import { defineComponent } from "vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import LPASidebar from "../components/LPASidebar.vue";
import LPAAuditHeader from "../../../components/AppSearchAndFilterBar.vue";
import AppButtonPrimary from "../../../components/AppButtonPrimary.vue";
import AppButtonSecondary from "../../../components/AppButtonSecondary.vue";
import AppListTextWithDividerLine from "../../../components/AppListTextWithDividerLine.vue";
import { getIsLast } from "../../../mixins/arrayMixin";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";
import AppButtonTertiary from "../../../components/AppButtonTertiary.vue";

import { useAudit } from "../store/audit";
import { Audit } from "../interfaces/audit";
import { User } from "../../../interfaces/user";

export default defineComponent({
  name: "LPAAudit",
  components: {
    AppPageLayout,
    LPAAuditHeader,
    LPASidebar,
    AppButtonPrimary,
    AppButtonSecondary,
    AppListTextWithDividerLine,
    AppListContainer,
    AppIconLibrary,
    AppListTextAndSubtext,
    AppButtonTertiary,
  },
  async mounted() {
    const store = useAudit();
    await store.fetchAudit();
    await store.fetchUser();
    this.audit = store.audit;
    this.audited_user = store.audited_user;
  },
  mixins: [getIsLast],
  data() {
    return {
      audit: [] as Audit[],
      audited_user: [] as User[],
      test: [
        {
          text: "Tony Stark",
          subtext: "Auditor",
          imgPath:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          text: "Peter Parker",
          subtext: "Befragter",
          imgPath:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          text: "Layer 1",
          subtext: "Layer",
          type: "profile",
        },
        {
          text: "Schweißerei",
          subtext: "Gruppe",
          type: "profile",
        },
        {
          text: "Samstag, 10.12.2022",
          subtext: "Fälligkeit",
          type: "profile",
        },
      ],
    };
  },
  methods: {
    getQuestionStatus(questionID: any, audit: Audit) {
      for (let i = 0; i < audit.answers.length; i++) {
        if (audit.answers[i].question_id === questionID) {
          if (audit.answers[i].answer === "red") {
            return "red";
          } else if (audit.answers[i].answer === "yellow") {
            return "yellow";
          } else if (audit.answers[i].answer === "green") {
            return "green";
          }
        }
      }
      return "gray";
    },
    getUserText(user: User) {
      return user.first_name + " " + user.last_name;
    },
    getDate(item: string) {
      return new Date(item).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    getLayer(layer: number){
      return "Layer " + layer
    }
  },
});
</script>