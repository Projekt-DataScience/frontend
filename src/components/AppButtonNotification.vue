<template>
  <button
    type="button"
    class="
      rounded-full
      bg-white
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
    <slot name="icon"></slot>
  </button>
</template>
  
  <script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppButtonNotification",
  components: {},
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