<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-30 bg-black/50">
      <div class="bg-white rounded-xl max-w-screen-md min-w-1/2">
        <slot></slot>
      </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppListText",
});
</script>
