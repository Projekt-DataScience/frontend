<template>
    <LPASidebar></LPASidebar>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue"

export default defineComponent({
  name: "LPADashboard",
  components: {
    LPASidebar
  },
  data() {
    return {
      
    };
  },
}); 
</script>