<template>
  <div class="">
    <div class="grid grid-cols-10 h-16 border-b-2 border-gray-200">
      <div class="col-span-8">
        <button class="h-16 flex" @click="$emit('toggleSidebarHeader')">
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
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import LPAIcon from "../assets/Icons/LPAIcon.vue";
import AppArrowsTopBottom from "../assets/Icons/AppArrowsTopBottom.vue";
import AppArrowsLeft from "../assets/Icons/AppArrowsLeft.vue";
import AppHomeIcon from "../assets/Icons/AppHomeIcon.vue";
import {truncateStringMixin} from "../mixins/truncateStringMixin"

export default defineComponent({
  name: "LPASidebarHeaderSmall",
  components: {
    LPAIcon,
    AppArrowsTopBottom,
    AppArrowsLeft,
    AppHomeIcon
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null
  },
  mixins: [
    truncateStringMixin
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