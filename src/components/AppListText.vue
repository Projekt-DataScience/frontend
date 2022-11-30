<template>
    <div class="text-md font-base">{{ text }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppListText",
  props: {
    text: {
        type: String,
        required: true
    }
  }
});
</script>