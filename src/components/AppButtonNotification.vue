<template>
  <button
    type="button"
    class="
      rounded-full
      p-1
      text-gray-400
      hover:text-gray-500
      focus:outline-none
      focus:ring-2
      focus:ring-primary-blue
      focus:ring-offset-2
      my-2
    "
  >
    <span class="sr-only">View notifications</span>
    <AppIconLibrary icon="bell" styling="h-7 text-gray-400"></AppIconLibrary>
  </button>
</template>
  
  <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppButtonNotification",
  components: {
    AppIconLibrary
  },
  data() {
    return {
      profileIsActive: false,
    };
  },
  methods: {
    handleNotificationToggle() {},
  },
});
</script>