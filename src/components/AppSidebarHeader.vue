<template>
  <div class="">
    <div class="grid grid-cols-2 border-b-2 border-gray-200 p-3">
      <div class="inline-grid">
        <router-link :to="{ name: 'MainDashboard' }" class="flex text-gray-400 hover:text-gray-600">
          <AppIconLibrary icon="home"></AppIconLibrary>
          <div class="flex-initial text-sm font-semibold ml-2">Startseite</div>
        </router-link>
      </div>
      <div class="flex justify-end items-center">
        <button
          class="
            inline-grid
            h-6
            border-2
            rounded-md
            border-gray-200
            px-1.5
            py-1
          "
          @click="$emit('toggleSidebar')"
        >
          <AppIconLibrary icon="arrowsLeft" styling="text-gray-400 h-full w-full"></AppIconLibrary>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 border-b-2 border-gray-200 p-3">
      <div class="flex items-center">
        <div class="bg-primary-blue rounded-md inline-grid">
          <div class="text-white w-full h-full p-2">
            <slot></slot>
          </div>
        </div>
        <div class="ml-2">
          <div class="grid">
            <div class="table col-span-11">
              <div class="table-cell align-middle text-left">
                <div class="text-xs font-medium px-1 whitespace-nowrap">
                  {{ truncateString(brandingName, 25) }}
                </div>
                <div class="text-sm font-bold px-1 whitespace-nowrap">
                  {{ truncateString(moduleName, 25) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { truncateStringMixin } from "../mixins/stringMixin";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "LPASidebarHeader",
  components: {
    AppIconLibrary
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  mixins: [truncateStringMixin],
  props: {
    brandingName: {
      type: String,
      required: true,
    },
    moduleName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
});
</script>