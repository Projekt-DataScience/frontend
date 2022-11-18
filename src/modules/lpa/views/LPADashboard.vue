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
          <div class="h-96 w-full rounded-xl border-2 border-gray-200 p-6">Test</div>
        </div>
        <div class="col-span-1">
          <div class="h-96 w-full rounded-xl border-2 border-gray-200 p-6">Test</div>
        </div>
        <div class="col-span-2">
          <div class="h-96 w-full rounded-xl border-2 border-gray-200 p-6">Test</div>
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

export default defineComponent({
  name: "LPADashboard",
  components: {
    LPASidebar,
    LPAPageLayout,
    AppSearchAndFilterBar
  },
  data() {
    return {};
  },
});
</script>