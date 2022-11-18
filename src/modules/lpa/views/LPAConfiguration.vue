<template>
    <LPAPageLayout>
    <template #sidebar>
      <!-- content for the sidebar slot -->
      <LPASidebar currentPage="LPAConfiguration"></LPASidebar>
    </template>
    <template #header>
      <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </template>
  </LPAPageLayout>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue";
import LPAPageLayout from "../components/LPAPageLayout.vue";
import AppSearchAndFilterBar from "../../../components/AppSearchAndFilterBar.vue";

export default defineComponent({
  name: "LPAConfiguration",
  components: {
    LPASidebar,
    LPAPageLayout,
    AppSearchAndFilterBar
  },
  data() {
    return {
      
    };
  },
}); 
</script>