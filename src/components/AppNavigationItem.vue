<template>
  <div class="mb-1" v-if="toggleIsActive">
    <router-link :to="{ name: routerName }">
      <div class="flex rounded-md text-gray-400 hover:text-gray-600">
        <div class="flex-none">
          <div class="inline-grid py-3 pl-3.5 pr-4">
            <AppIconLibrary :icon="iconName" styling="w-5! h-5!"></AppIconLibrary>
          </div>
        </div>
        <div class="flex-inherit table ml-2">
          <div class="table-cell align-middle text-left">
            <div class="text-sm font-semibold whitespace-nowrap">
              {{ itemName }}
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
  <div class="mb-1" v-else>
    <router-link :to="{ name: routerName }">
      <div class="flex rounded-md text-gray-400 hover:text-gray-600 justify-center">
        <div class="inline-grid py-3 pl-3.5 pr-4">
          <AppIconLibrary :icon="iconName" styling="w-5! h-5!"></AppIconLibrary>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppNavigationItem",
  components: {
    AppIconLibrary
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
    routerName: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true
    },
    toggleIsActive: {
      type: Boolean,
      required: true,
      default: true
    }
  },
});
</script>