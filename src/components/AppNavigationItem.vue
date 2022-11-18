<template>
  <div class="mb-1">
    <router-link :to="{ name: routerName }">
      <div class="flex rounded-md text-gray-400">
        <div class="flex-none">
          <div class="inline-grid py-3 pl-3.5 pr-4">
            <div class="">
              <slot class="w-full h-full"></slot>
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
    </router-link>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppNavigationItem",
  components: {},
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
    routerName: {
      type: String,
      required: true,
    },
  },
});
</script>