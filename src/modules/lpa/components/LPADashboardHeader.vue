<template>
    <div>
        <AppSearchAndFilterBar></AppSearchAndFilterBar>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { AppSearchAndFilterBar } from "../../../libraries/components"; 

export default defineComponent({
  name: "LPASidebar",
  components: {
    AppSearchAndFilterBar
  },
  props: {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
});
</script>