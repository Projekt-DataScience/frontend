<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <img
        class="h-8 w-8 rounded-full mr-2"
        :src="imgPath"
        alt=""
        v-if="imgPath"
      />
      <div>
        <div class="text-gray-400 text-sm text-semibold" v-if="subtext">
          {{ subtext }}
        </div>
        <div class="font-base" v-if="text">{{ text }}</div>
        <div class="font-semibold" v-if="boldText">{{ boldText }}</div>
      </div>
    </div>

    <div class="px-5" v-if="isLast === false">
      <AppIconLibrary
        icon="divideLine"
        styling="h-4 text-primary-blue"
      ></AppIconLibrary>
    </div>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppListTextWithDividerLines",
  components: {
    AppIconLibrary,
  },
  emits: {
    toggleSidebar: null,
    toggleSidebarHeader: null,
  },
  props: {
    text: {
      type: String,
      required: false,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
    imgPath: {
      type: String,
      required: false,
    },
    subtext: {
      type: String,
      required: false,
    },
    boldText:{
      type: String,
      required: false
    }
  },
  methods: {},
});
</script>