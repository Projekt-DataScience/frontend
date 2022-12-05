<template>
  <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAAudit"></LPASidebar>
    </template>
    <template #header>
      <div class="flex">
        <div class="m-6">Audit durchführen</div>
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
    <template #content> Content </template>
    <template #subsidebar> Sub Sidebar </template>
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

export default defineComponent({
  name: "LPAAudit",
  components: {
    AppPageLayout,
    LPAAuditHeader,
    LPASidebar,
    AppButtonPrimary,
    AppButtonSecondary,
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>