<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAAudit"></LPASidebar>
    </template>
    <template #header>
      <div class="flex items-center">
        <div class="m-6 font-semibold text-lg">Audit durchführen</div>
        <div class="flex-auto">
          <div class="flex justify-end my-6">
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
    </template>
    <template #content>
      <div class="flex items-center">
        <div v-for="(item, index) in test" :key="index">
          <AppListTextWithDividerLine
            :text="item.text"
            :subtext="item.subtext"
            :imgPath="item.imgPath"
            :type="item.type"
            :isLast="getStatus(item, test)"
          ></AppListTextWithDividerLine>
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
import { getStatus } from "../../../mixins/listMixin";

export default defineComponent({
  name: "LPAAudit",
  components: {
    AppPageLayout,
    LPAAuditHeader,
    LPASidebar,
    AppButtonPrimary,
    AppButtonSecondary,
    AppListTextWithDividerLine,
  },
  mixins: [getStatus],
  data() {
    return {
      test: [
        {
          text: "Tony Stark",
          subtext: "Auditor",
          imgPath:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          type: "profile",
        },
        {
          text: "Peter Parker",
          subtext: "Befragter",
          imgPath:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          type: "profile",
        },
      ],
    };
  },
  mounted() {},
});
</script>