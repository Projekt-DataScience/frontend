<template>
  <div class="mb-1">
      <div class="flex bg-cl-active rounded-md text-cl-black">
        <div class="flex-none">
          <div class="inline-grid py-3 pl-3.5 pr-4">
            <div class="">
              <slot class="w-5! h-5!"></slot>
            </div>
          </div>
        </div>
        <div class="flex-inherit table ml-2">
          <div class="table-cell align-middle text-left">
            <div class="text-sm font-bold whitespace-nowrap">
              {{ itemName }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
  
  <script lang="ts">
import { ref, defineComponent } from "vue";
import LPADashboard from "../assets/Icons/LPADashboard.vue";

export default defineComponent({
  name: "AppNavigationItem",
  components: {
    LPADashboard,
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
});
</script>