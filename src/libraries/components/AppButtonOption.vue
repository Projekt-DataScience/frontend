<template>
  <div>
    <button @click="$emit('buttonClick')">
      <AppIconLibrary v-if="isVertical" icon="option" styling="h-6 w-full px-3 mt-2 text-gray-400 rotate-90"></AppIconLibrary>
    <AppIconLibrary v-else icon="option" styling="h-6 w-full px-3 mt-2 text-gray-400"></AppIconLibrary>
    </button>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppButtonOption",
  components: {
    AppIconLibrary
  },
  props: {
    isVertical: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    buttonClick: null
  },
  methods: {
    
  },
});
</script>