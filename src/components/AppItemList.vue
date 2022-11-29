<template>
  <div class="grid grid-cols-1">
    <div class="grid grid-cols-10 ">
      <div class="col-span-8 justify-items-start">
        <div class="flex">
          <div class="flex items-center justify-start">
            <slot name="wrapperLeft"></slot>
          </div>
          <div class="flex-initial">
            <slot name="wrapperContent">
            </slot>
          </div>
        </div>
      </div>
      <div class="col-span-2 flex items-center justify-end">
        <slot name="wrapperRight"></slot>
      </div>
    </div>
  </div>
</template>
      
<script lang="ts">
import { ref, defineComponent } from "vue";
import AppTextWithDividerLine from "./AppTextWithDividerLine.vue";

export default defineComponent({
  name: "AppItemList",
  components: {
    AppTextWithDividerLine
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  methods: {},
});
</script>