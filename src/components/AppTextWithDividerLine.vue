<template>
  <div class="flex items-center">
    <div>{{text}}</div>
    <div class="px-4" v-if="isLast === false">
      <LPADivideLineIcon class="h-4 text-primary-blue"></LPADivideLineIcon>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import LPADivideLineIcon from "../assets/Icons/LPADivideLineIcon.vue";

export default defineComponent({
  name: "AppContainer",
  components: {
    LPADivideLineIcon
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true
    }
  },
  methods: {},
});
</script>