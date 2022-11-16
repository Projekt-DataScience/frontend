<template>
  <div>
    <div class="grid grid-cols-10 h-16 border-b-2 border-gray-200">
      <div class="col-span-8">
        <button class="h-16 flex">
          <div class="flex-none inline-grid w-16 p-2">
            <div class="bg-primary-blue rounded-md">
              <LPAIcon class="text-white w-full h-full p-2"></LPAIcon>
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
                    <AppArrowsTopBottom
                      class="text-gray-400 h-full w-full p-2.5"
                    ></AppArrowsTopBottom>
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
              <AppArrowsLeft
                class="text-gray-400 h-full w-full"
              ></AppArrowsLeft>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-shrink-0 items-center border-b-2 border-gray-200">
    
    <div class="h-16 flex">
      <div class="flex-none inline-grid w-16 p-2">
        <div class="bg-primary-blue rounded-md">
          <LPAIcon class="text-white w-full h-full p-2"></LPAIcon>
        </div>
      </div>
      <div class="flex-initial w-56">
        <button class="w-56">
          <div class="flex">
            <div class="table h-16 flex-none">
              <div class="table-cell align-middle text-left">
                <div class="text-xs font-medium px-1 whitespace-nowrap">
                  {{ brandingName }}
                </div>
                <div class="text-sm font-bold px-1 whitespace-nowrap">
                  {{ moduleName }}
                </div>
              </div>
            </div>
            <div class="flex-initial w-8 ml-auto">
              <div class="inline-grid h-16">
                <AppArrowsTopBottom
                  class="text-gray-400 h-full w-full p-2.5"
                ></AppArrowsTopBottom>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div class="flex-initial w-full ml-6">
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
              <AppArrowsLeft
                class="text-gray-400 h-full w-full"
              ></AppArrowsLeft>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import LPAIcon from "./iconElements/LPAIcon.vue";
import AppArrowsTopBottom from "./iconElements/AppArrowsTopBottom.vue";
import AppArrowsLeft from "./iconElements/AppArrowsLeft.vue";

export default defineComponent({
  name: "LPASidebarHeader",
  components: {
    LPAIcon,
    AppArrowsTopBottom,
    AppArrowsLeft,
  },
  emits: {
    toggleSidebar: null,
  },
  props: {
    brandingName: {
      type: String,
      required: true,
    },
    moduleName: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    truncateString(str: String, n: number) {
      if (str.length > n) {
        return str.substring(0, n) + "...";
      } else {
        return str;
      }
    },
  },
});
</script>