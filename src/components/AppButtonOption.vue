<template>
  <div>
    <AppOptionIcon v-if="isVertical" class="h-6 w-full px-3 text-gray-400 rotate-90"></AppOptionIcon>
    <AppOptionIcon v-else class="h-6 w-full px-3 text-gray-400"></AppOptionIcon>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppOptionIcon from "../assets/Icons/AppOptionIcon.vue"

export default defineComponent({
  name: "AppButtonOption",
  components: {
    AppOptionIcon
  },
  props: {
    isVertical: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    
  },
});
</script>