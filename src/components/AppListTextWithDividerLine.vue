<template>
  <div class="flex items-center">
    <div v-if="type === 'normal' || type === undefined">
      {{text}}
    </div>
    <div v-if="type === 'profile'">
      <div class="flex items-center">
          <img class="h-8 w-8 rounded-full" :src="imgPath" alt="">
          <div class="ml-2">
            <div class="text-gray-400 text-sm text-semibold">{{subtext}}</div>
            <div class="text-base">{{text}}</div>
          </div>
      </div>
    </div>
    <div class="px-4" v-if="isLast === false">
      <AppIconLibrary icon="divideLine" styling="h-4 text-primary-blue"></AppIconLibrary>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppListTextWithDividerLine",
  components: {
    AppIconLibrary
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
    },
    type: {
      type: String,
      required: false
    },
    imgPath: {
      type: String,
      required: false
    },
    subtext: {
      type: String,
      required: false
    }
  },
  methods: {},
});
</script>