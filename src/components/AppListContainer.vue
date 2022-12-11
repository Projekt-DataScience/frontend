<template>
  <div class="flex" :class="getAlignement()">
    <div class="flex-none mr-2" v-if="hasWrapperLeftSlot()">
      <slot name="wrapperLeft"></slot>
    </div>
    <div class="flex-auto">
      <slot name="wrapperContent"></slot>
    </div>
    <div class="flex-auto">
      <div class="flex justify-end items-center" v-if="hasWrapperRightSlot()">
        <slot name="wrapperRight"></slot>
      </div>
    </div>
  </div>
  <div v-if="isLast===false" class="border-b-2 border-gray-200 mb-4 mt-4"></div>
</template>
      
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppListContainer",
  components: {},
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    isLast: {
        type: Boolean,
        default: true,
        required: false
    },
    alignement: {
      type: String,
      default: "center",
      required: false
    }

  },
  data() {
    return {
      
    }
  },
  methods: {
    hasWrapperLeftSlot() {
      return !!this.$slots.wrapperLeft;
    },
    hasWrapperRightSlot() {
      return !!this.$slots.wrapperRight;
    },
    getAlignement() {
      return "items-"+this.alignement
    }
  },
});
</script>