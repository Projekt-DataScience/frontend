<template>
  <div>
    <div v-if="isActive">
      <div class="flex bg-cl-active rounded-md text-cl-black">
        <div class="flex-none">
          <div class="inline-grid p-4">
            <div class="">
              <LPADashboard class="w-7 h-7"></LPADashboard>
            </div>
          </div>
        </div>
        <div class="flex-inherit table ml-2">
          <div class="table-cell align-middle text-left">
            <div class="text-sm font-semibold whitespace-nowrap">
              Übersicht
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <div class="flex rounded-md text-gray-400">
        <div class="flex-none">
          <div class="inline-grid p-4">
            <div class="">
              <LPADashboard class="w-7 h-7"></LPADashboard>
            </div>
          </div>
        </div>
        <div class="flex-inherit table ml-2">
          <div class="table-cell align-middle text-left">
            <div class="text-sm font-semibold whitespace-nowrap">
              Übersicht
            </div>
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
    isActive: {
      type: Boolean,
      required: true,
    },
    moduleName: {
      type: String,
      required: false,
    },
  },
});
</script>