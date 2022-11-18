<template>
    <LPASidebar currentPage="LPAHistory"></LPASidebar>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue"

export default defineComponent({
  name: "LPAHistory",
  components: {
    LPASidebar
  },
  data() {
    return {
      
    };
  },
}); 
</script>