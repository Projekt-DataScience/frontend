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
      <div class="flex items-center m-6">
        <div v-for="(item, index) in test" :key="index">
          <AppListTextWithDividerLine
            :text="item.text"
            :subtext="item.subtext"
            :imgPath="item.imgPath"
            :type="item.type"
            :isLast="getIsLast(item, test)"
          ></AppListTextWithDividerLine>
        </div>
      </div>
    </template>
    <template #content>
      <div v-for="(item, index) in audit" :key="index">
        <div v-for="(items, index) in item.questions" :key="index">
        <AppListContainer :isLast="getIsLast(items, item.questions)">
          <template #wrapperLeft>
            <AppIconLibrary icon="lpaStatus" type="green" styling="h-10"></AppIconLibrary>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext
              :text="items.title"
              :subtext="[
                {
                  text: items.category
                }
              ]"
            ></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            Button
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
import AppListContainer from "../../../components/AppListContainer.vue"
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";

import { useAudit } from "../store/audit";
import { Audit } from "../interfaces/audit"

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
    AppListTextAndSubtext
  },
  async mounted() {
    const store = useAudit();
    await store.fetchAudit();
    this.audit = store.audit;
  },
  mixins: [getIsLast],
  data() {
    return {
      audit: [] as Audit[],
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
});
</script>