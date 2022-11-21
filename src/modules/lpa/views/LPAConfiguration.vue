<template>
    <AppPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAConfiguration"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
  </AppPageLayout>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import AppPageLayout from "../../../components/AppPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";

export default defineComponent({
  name: "LPAConfiguration",
  components: {
    LPASidebar,
    AppPageLayout,
    AppSearchAndFilterBar
  },
  data() {
    return {
      
    };
  },
}); 
</script>