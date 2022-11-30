<template>
  <div class="flex items-center">
    <div>{{text}}</div>
    <div class="px-4" v-if="isLast === false">
      <AppIconLibrary icon="divideLine" styling="h-4 text-primary-blue"></AppIconLibrary>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppListTextWithDividerLine",
  components: {
    AppIconLibrary
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true
    }
  },
  methods: {},
});
</script>