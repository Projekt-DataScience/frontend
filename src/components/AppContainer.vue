<template>
  <div class="w-full rounded-xl border-2 border-gray-200">
    <div class="border-b-2 border-gray-200 px-6 py-4">
      <div class="text-md font-semibold">{{ containerName }}</div>
    </div>
    <div class="px-6 py-4">
      <slot name="content"></slot>
    </div>
    <div class="border-t-2 border-gray-200 px-6 py-4" v-if="hasFooterSlot()">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppContainer",
  components: {},
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    containerName: {
      type: String,
      required: true,
    },
  },
  methods: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
});
</script>