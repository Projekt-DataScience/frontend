<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAHistory"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
    <template #content>
      <div v-for="item in audits" :key="item.id">
        <AppListContainer :isLast="getIsLast(item, audits)">
          <template #wrapperLeft>
            <AppIconLibrary icon="lpaStatus" :type="item.status" styling="h-10"></AppIconLibrary>
          </template>
          <template #wrapperContent>
            <AppListTextAndSubtext :text="item.name" :subtext="item.listItems.slice(0, 2)"></AppListTextAndSubtext>
          </template>
          <template #wrapperRight>
            <LPAHistoryBar :auditList="item.listItems"></LPAHistoryBar>
            <AppButtonOption v-bind:isVertical="false"></AppButtonOption>
          </template>
        </AppListContainer>
      </div>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppListTextAndSubtext from "../../../components/AppListTextAndSubtext.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";
import LPAHistoryBar from "../components/LPAHistoryBar.vue";
import { getIsLast } from "../../../mixins/arrayMixin";
import { Audits, useAudits } from "../store/audits";

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar,
    AppSearchAndFilterBar,
    AppPageLayout,
    AppButtonOption,
    AppListContainer,
    AppListTextAndSubtext,
    AppIconLibrary,
    LPAHistoryBar
  },
  async mounted() {
    const store = useAudits();
    await store.fetchAudits();
    this.audits = store.audits;
  },
  data() {
    return {
      audits: [] as Audits[]
    }
  },
  methods: {
  },
});
</script>