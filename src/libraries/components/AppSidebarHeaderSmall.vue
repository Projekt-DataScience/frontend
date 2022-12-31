<template>
  <div class="">
    <div class="grid grid-cols-10 h-16 border-b-2 border-gray-200">
      <div class="col-span-8">
        <button class="h-16 flex" @click="$emit('toggleSidebarHeader')">
          <div class="flex-none inline-grid w-16 p-2">
            <div class="bg-primary-blue rounded-md">
              <AppIconLibrary icon="lpa" class="text-white w-full h-full p-2"></AppIconLibrary>
            </div>
          </div>
          <div class="flex-initial">
              <div class="grid grid-cols-12">
                <div class="table h-16 col-span-11">
                  <div class="table-cell align-middle text-left">
                    <div class="text-xs font-medium px-1 whitespace-nowrap">
                      {{ truncateString(brandingName, 25) }}
                    </div>
                    <div class="text-sm font-bold px-1 whitespace-nowrap">
                      {{ truncateString(moduleName, 25) }}
                    </div>
                  </div>
                </div>
                <div class="col-span-1 w-8">
                  <div class="inline-grid h-16">
                    <AppIconLibrary icon="arrowsTopBottom" styling="text-gray-400 h-full w-full p-2.5"></AppIconLibrary>
                  </div>
                </div>
              </div>
          </div>
        </button>
      </div>
      <div class="col-span-2 inline-grid">
        <div class="table h-16">
          <div class="table-cell align-middle text-center">
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
              <AppIconLibrary icon="ArrowsLeft"
                class="text-gray-400 h-full w-full"
              ></AppIconLibrary>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
 
import { stringMixin } from "../mixins";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "LPASidebarHeaderSmall",
  components: {
    AppIconLibrary
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null
  },
  mixins: [
    stringMixin.truncateStringMixin
  ],
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