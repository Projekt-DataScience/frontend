<template>
    <LPASidebar currentPage="LPAQuestions"></LPASidebar>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import LPASidebar from "../components/LPASidebar.vue";

export default defineComponent({
  name: "LPAQuestions",
  components: {
    LPASidebar
  },
  data() {
    return {
      
    };
  },
}); 
</script>