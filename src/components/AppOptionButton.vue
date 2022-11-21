<template>
  <div>
    <AppOptionIcon class="h-6 w-full px-3"></AppOptionIcon>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from "vue";
import AppOptionIcon from "../assets/Icons/AppOptionIcon.vue"

export default defineComponent({
  name: "AppOptionButton",
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