<template>
  <div></div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "LPAItemList",
  components: {},
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    containerName: {
      type: String,
      required: false,
    },
  },
  methods: {},
});
</script>