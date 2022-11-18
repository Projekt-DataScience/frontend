<template>
    <LPASidebar currentPage="LPAConfiguration"></LPASidebar>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue"

export default defineComponent({
  name: "LPAConfiguration",
  components: {
    LPASidebar
  },
  data() {
    return {
      
    };
  },
}); 
</script>